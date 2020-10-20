import React from 'react';
import './App.css';
import { Map } from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import { getExistingLocations as getVisitedLocations, getFirstLocation, getLocations, getRoute, WLocation } from './Points';
import { LocationOverview } from './locationOverview/LocationOverview';
import { ModalState, WModal } from './modal/Modal';
import Confetti from 'react-confetti';


export default class App extends React.Component<{}, { map?: Map, newLocations: WLocation[], confettiEnabled: boolean, currentLocation?: mapboxgl.Marker}> {

  render() {
    var w = window.outerWidth;
    var h = window.innerHeight;    
    var locs = (this.state?.newLocations || []).map(i => WModal.CreateModalFromWLocation(i, true))
    return [
      //|| 
      <Confetti
        numberOfPieces={(this.state?.confettiEnabled) ? 200 : 0}
        width={w}
        height={h}
        key="Confetti"
      />,
      <div key="a" id="map"></div>,
      <LocationOverview key="b" map={this.state?.map} debugThing={this}/>,
      locs
    ];
  }

  turnOnConfetti() {
    this.setState({
      confettiEnabled: true
    });
    setTimeout(() => {
      this.setState({
        confettiEnabled: false
      });
    }, 7000);
    this.forceUpdate();
  }

  componentDidMount() {
    try{
      this.SetupMap();
      this.initialLocationSetup();
    } catch (e) {
      this.logError("Error. App.tsx:30", e)
    }
  }

  logError(line: string, e: any)
  {
    alert(line + " " + JSON.stringify(e, this.replaceErrors));
    console.error(e);
  }

  private SetupMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmV3bm90dGFrZW5uYW1lIiwiYSI6ImNrZjhuZzZvZjA2MDUyd3B4MmdkMzhpamEifQ.3p91vKWfOce6fRzddTg_qA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/newnottakenname/ckf8o4w885kx21and6jq56h8q',
      zoom: 6,
      center: [5.55, 52.316667]
    });

    this.setState({
      map: map,
      confettiEnabled: false
    }, () => {
        this.addRouteToMap(map);
    });

    var visited = getVisitedLocations();
    getLocations().forEach(i => {
      new mapboxgl.Marker({
        color: visited.some(j => i.id === j.id) ? "orange" : undefined 
      })
        .setLngLat([i.coordinates.longitude, i.coordinates.latitude])
        .addTo(map);
    });
  }

  replaceErrors(key: any, value: any) {
    if (value instanceof Error) {
      var error = ({} as any);

      Object.getOwnPropertyNames(value).forEach(function (key) {
        error[key] = (value as any)[key];
      });

      return error;
    }

    return value;
  }

  onPositionUpdate(position: Position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    var visited = getVisitedLocations();
    getLocations().forEach(i => {
      if (visited.some(j => i.id === j.id)) {
        return;
      }

      if (this.isCloseTo(i, longitude, latitude)) {
        this.addToLocalStorage(i);
        this.setState({
          newLocations: (this.state?.newLocations || []).concat([i])
        });
        this.turnOnConfetti();
      }
    });

    this.state.currentLocation?.setLngLat([position.coords.longitude, position.coords.latitude]);
  }

  initialLocationSetup() {
    if (!navigator.geolocation) {
      alert("Please allow me to use your location. Pls?")
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        try {
          if(this.state.map !== undefined) {
            this.setMapSettings(this.state.map, position);
          }
          this.onPositionUpdate(position);          
        } catch(e) {
          this.logError("Error. App.tsx:88 ", e);
        }
      }, (error) => {
        this.logError("Error getting current location", error);
      });

      navigator.geolocation.watchPosition((pos) => this.onPositionUpdate(pos), (error) => {
        this.logError("Error getting watch on location", error);
      }, {
        enableHighAccuracy: true
      })
    }

    var visited = getVisitedLocations();
    if (visited.length === 0) {
      this.addToLocalStorage(getFirstLocation());
      this.setState({
        newLocations: (this.state?.newLocations || []).concat(getFirstLocation())
      })
      this.turnOnConfetti();
    }
  }

  addRouteToMap(map: Map) {
    map.on('load', function () {
      map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': getRoute().map(i => [i[1], i[0]])
          }
        }
      });
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#16a085',
          'line-width': 8
        }
      });
    });
  }

  setMapSettings(map: mapboxgl.Map, position: Position) {
    map.easeTo({
      center: [position.coords.longitude, position.coords.latitude],
      zoom: 12
    });

    var svg = document.createElement("div");
    svg.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='41px' width='27px' viewBox='0 0 512 512'><title>ionicons-v5-h</title><path d='M388,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><path d='M124,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><polyline points='256 360 256 274 192 232 272 144 312 216 368 216' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><path d='M320,136a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,72a32,32,0,1,0-.2,64Z'/></svg>";

    var marker = new mapboxgl.Marker({
      element: (svg as any as HTMLElement)
    })
    .setLngLat([position.coords.longitude, position.coords.latitude])
    .addTo(map);

    this.setState({
      currentLocation: marker
    });
  }


  addToLocalStorage(i: WLocation) {
    window.localStorage.setItem("foundLocations", JSON.stringify(getVisitedLocations().concat([i])));
  }


  isCloseTo(i: WLocation, longitude: number, latitude: number) {
    const newLocal = this.distance(i.coordinates.longitude, i.coordinates.latitude, longitude, latitude);
    console.warn(newLocal, i, longitude, latitude);
    return newLocal < 0.5;
  }

  

  distance(lon1:number, lat1:number, lon2:number, lat2:number) {
    function toRad(input: number)
    {
      return input * Math.PI / 180;
    }

    var R = 6371; // Radius of the earth in km
    var dLat = toRad(lat2 - lat1);  // Javascript functions in radians
    var dLon = toRad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }
}