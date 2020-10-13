import React from "react";
import { Map } from 'mapbox-gl';
import { ModalState, WModal } from "../modal/Modal";
import { getExistingLocations, getLocations, purgeLocations, WLocation } from "../Points";
import './LocationOverview.css'
import App from "../App";

export class LocationOverview extends React.Component<{ map?: Map, debugThing: App}, {}> {

    modals: JSX.Element[] = [];

    render() {
        this.modals = this.modals.filter(i => (i as any as WModal).state?.modalState !== ModalState.Hidden)

        var listItems = getExistingLocations().map(location => <li key={location.id} onClick={() => {
            if (location === undefined) {
                return null;
            }

            if (location.coordinates.latitude !== 0) {
                this.props.map?.easeTo({
                    center: [location.coordinates.longitude, location.coordinates.latitude], 
                    zoom: 13.5,
                    offset: this.getOffset()
                }, [location.coordinates.longitude, location.coordinates.latitude]);
            }
            this.modals.push(<WModal key={Date.now()} title={location.title} modalState={ModalState.Open}>
                    <p className="modal-desc" dangerouslySetInnerHTML={{ __html: location.description }}></p>
                    <a className="modal-link" href={location.link} target="blank">
                        <p className="modal-link-container">Open secret</p>
                    </a>
            </WModal>);
            this.forceUpdate();
        }
        }>{location.title}</li>).concat([this.getDebug()])

        return [<WModal key="a" title="Found locations" modalState={ModalState.Peek} hideClose={true}>
            <ul className="itemList">
                {listItems}
            </ul>
        </WModal>].concat(this.modals);
    }

    getOffset(): [number, number] {
        var width = window.outerWidth;
        if(width < 700) {
            return [0, - window.outerHeight * 0.66 * 0.5]
        } else if (width < 1000) {
            return [-(window.outerWidth - 500)/2, 0]
        }
        return [0,0]
    }

    getDebug() {
        return <li key="debug" onClick={() => {
            this.modals.push(<WModal key="debug" title={"Debug menu"} modalState={ModalState.Open}>
                <div>
                    <div className="modal-link" onClick={() => {
                        var app = this.props.debugThing;
                        purgeLocations();
                        getLocations().map(i => app.addToLocalStorage(i));
                    }}>
                        <p className="modal-link-container">Add all</p>
                    </div>
                    <div className="modal-link" onClick={() => {
                        purgeLocations();
                    }}>
                        <p className="modal-link-container">Remove all</p>
                    </div>
                </div>
                
            </WModal>);
            this.forceUpdate();
        }}>Debug options</li>
    }
}