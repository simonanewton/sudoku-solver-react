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
                <form>
                    <input type="number" value={this.state.value} min="0" max="9" maxLength="1"/>
                </form>
            </div>
        );

    }
}

export default Cell;
