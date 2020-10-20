import React from 'react';
import './Modal.css'
import logo from './close-circle-outline.svg';
import { WLocation } from '../Points';

export enum ModalState {
    Open, Hidden, Peek
}

export class WModal extends React.Component<{ modalState?: ModalState; title: string; hideClose?: boolean }, { modalState: ModalState; headerHeight: string}> {
    state = {
        modalState: this.props.modalState || ModalState.Open,
        headerHeight: "var(--headerheight)"
    }

    headerElement?: HTMLDivElement | null;


    render() {
        // let cName: string = "element-animation"
        let cName: string = "modal";
        cName += " modal" + this.state.modalState.toString();
        cName += " modal" + this.props.modalState?.toString() + "intro";

        var closeButton = null;
        if(this.state.modalState !== ModalState.Peek && !this.props.hideClose)
        {
            closeButton = <img onClick={(e) => {this.setState({modalState: ModalState.Hidden})
            e.bubbles = false;
            e.stopPropagation();
        }} src={logo} className="modalclose" alt="logo" />;
        }


        return (
            <div className={cName} style={{
                zIndex: this.props.modalState === ModalState.Open ? 100 : 50
            }}>
                <div ref={i => this.headerElement = i} className='modaltop' onClick={() => this.setState({ modalState: this.state.modalState === ModalState.Open ? ModalState.Peek : ModalState.Open })}>
                    <h1>{this.props.title}</h1>
                    {closeButton}
                </div>
                <div className="modal-item-wrapper" style={{
                    height: "calc(66vh - " +  this.state.headerHeight + ")"
                }}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            headerHeight: this.headerElement?.clientHeight + "px"
        });
        this.forceUpdate();
    }


    onmodalclick() {
        var modal = document.getElementById("modal");
        modal?.classList.remove("element-animation");
        modal?.classList.add("element-animation-reverse");
    }

    static CreateModalFromWLocation(location: WLocation, isnew: boolean)
    {
        var link = null;
        if (location.link !== "" && location.link !== null) {
            link = <a className="modal-link" href={location.link} target="blank">
                <p className="modal-link-container">Open secret</p>
            </a>;
        }

        var image = null;
        if (location.imageLink !== null && location.imageLink !== undefined && location.imageLink !== "") {
            image = <img className="modal-desc-image" src={location.imageLink} alt={location.id}></img>
        }
        return <WModal key={Date.now()} title={location.title + (isnew ? "🎉" : "")} modalState={ModalState.Open}>
            <div className="modal-desc">
                {image}
                <p dangerouslySetInnerHTML={{ __html: location.description }}></p>
            </div>
            {link}
        </WModal>
    }
}