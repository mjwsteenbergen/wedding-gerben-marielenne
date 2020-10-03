import React from "react";
import { Map } from 'mapbox-gl';
import { ModalState, WModal } from "../modal/Modal";
import { getExistingLocations, getLocations, purgeLocations } from "../Points";
import './LocationOverview.css'
import App from "../App";

export class LocationOverview extends React.Component<{ map?: Map, debugThing: App}, {}> {

    modals: JSX.Element[] = [];

    render() {
        this.modals = this.modals.filter(i => (i as any).state?.modalState !== ModalState.Hidden)

        var listItems = getExistingLocations().map(location => <li key={location.id} onClick={() => {
            if (location === undefined) {
                return null;
            }
            if (location.coordinates.latitude !== 0) {
                this.props.map?.easeTo({
                    center: [location.coordinates.longitude, location.coordinates.latitude - 0.01], 
                    zoom: 13.5
                }, [location.coordinates.longitude, location.coordinates.latitude - 0.01]);
            }
            this.modals.push(<WModal key={Date.now()} title={location.title} modalState={ModalState.Open}>
                <p>{location.description}</p>
                <a className="modal-link" href={location.link} target="blank">
                    <p className="modal-link-container">Open secret</p>
                </a>
            </WModal>);
            this.forceUpdate();
        }
        }>{location.title}</li>).concat([<li key="debug" onClick={() => {
            this.modals.push(<WModal key="debug" title={"Debug menu"} modalState={ModalState.Open}>
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
            </WModal>);
            this.forceUpdate();
        }}>Debug options</li>])

        return [<WModal key="a" title="Found locations" modalState={ModalState.Peek} hideClose={true}>
            <ul className="itemList">
                {listItems}
            </ul>
        </WModal>].concat(this.modals);
    }
}