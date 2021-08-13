import React, { Component } from "react";
import Cell from "../Cell";
import "./index.css";

class Grid extends Component {
    render = () => {
        return (
            <div className="grid">
                <div className="d-flex">
                    <Cell value={this.props.values[0]} />
                    <Cell value={this.props.values[1]} />
                    <Cell value={this.props.values[2]} />
                </div>
                <div className="d-flex">
                    <Cell value={this.props.values[3]} />
                    <Cell value={this.props.values[4]} />
                    <Cell value={this.props.values[5]} />

                </div>
                <div className="d-flex">
                    <Cell value={this.props.values[6]} />
                    <Cell value={this.props.values[7]} />
                    <Cell value={this.props.values[8]} />
                </div>
            </div>
        );
    }
}

export default Grid;
