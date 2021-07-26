import React, { Component } from "react";
// import {  } from "react-bootstrap";
import "./index.css";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            filled: false
        };
    }

    modifyValue = () => {}

    render = () => {
        return (
            <div className="cell" onClick={this.modifyValue}>
                <p className="value">{this.state.value}</p>
            </div>
        );

    }
}

export default Cell;
