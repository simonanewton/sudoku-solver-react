import React, { Component } from "react";
import Cell from "../Cell";

class Row extends Component {
    render = () => {
        return(
            <div className="d-flex justify-content-center">
                <Cell value={this.props.values[0]} />
                <Cell value={this.props.values[1]} />
                <Cell value={this.props.values[2]} />
                <Cell value={this.props.values[3]} />
                <Cell value={this.props.values[4]} />
                <Cell value={this.props.values[5]} />
                <Cell value={this.props.values[6]} />
                <Cell value={this.props.values[7]} />
                <Cell value={this.props.values[8]} />
            </div>
        );
    }
}

export default Row;
