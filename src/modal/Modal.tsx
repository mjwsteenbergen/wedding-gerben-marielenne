import React from 'react';
import './Modal.css'
import logo from './close-circle-outline.svg';

export enum ModalState {
    Open, Hidden, Peek
}

export class WModal extends React.Component<{ modalState?: ModalState; title: string; hideClose?: boolean;}, { modalState: ModalState; }> {
    state = {
        modalState: this.props.modalState || ModalState.Open
    }

    render() {
        // let cName: string = "element-animation"
        let cName: string = "modal";
        cName += " modal" + this.state.modalState.toString();
        cName += " modal" + this.props.modalState?.toString() + "intro";

        var closeButton = null;
        if(this.state.modalState !== ModalState.Peek && !this.props.hideClose)
        {
            closeButton = <img onClick={() => this.setState({modalState: ModalState.Hidden})} src={logo} className="modalclose" alt="logo" />;
        }

        return (
            <div className={cName} style={{
                zIndex: this.props.modalState === ModalState.Open ? 100 : 50
            }}>
                <div className='modaltop'>
                    <h1 onClick={() => this.setState({modalState: this.state.modalState === ModalState.Open ? ModalState.Peek : ModalState.Open})}>{this.props.title}</h1>
                    {closeButton}
                </div>
                {this.props.children}
            </div>
        );
    }


    onmodalclick() {
        var modal = document.getElementById("modal");
        modal?.classList.remove("element-animation");
        modal?.classList.add("element-animation-reverse");
    }
}