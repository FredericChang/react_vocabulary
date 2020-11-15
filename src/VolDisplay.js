import React, { Component, component } from "react";
import { VolTable } from "./VolTable";
import { VolTableRow } from "./VolTableRow";

export class VolDisplay extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedVol: null,
        }
    }
    
    render() {
        return <div className="m-2">
            <VolTable vols= {this.props.vols}
            // voiceCallback = { this.startVoice}
            deleteCallback = { this.props.deleteCallback} />
            
        </div>
    }

}