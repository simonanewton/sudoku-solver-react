import React, { Component } from "react";
import Cell from "../Cell";

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        };
    }

    render = () => {
        return (
            <div>
                <div className="d-flex">
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
                <div className="d-flex">
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
                <div className="d-flex">
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
            </div>
        );
    }
}

export default Grid;
