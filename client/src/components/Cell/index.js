import React, { Component } from "react";
// import {  } from "react-bootstrap";
import "./index.css";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            filled: false
        };
    }

    render = () => {
        return (
            <div className="cell">
                <p className="value">{this.state.value}</p>
            </div>
        );

    }
}

export default Cell;
