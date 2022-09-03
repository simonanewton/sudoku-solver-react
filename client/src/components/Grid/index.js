import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Cell from "../Cell";
import "./index.css";

class Grid extends Component {

    renderCells = (values) => {
        let cells = [];
        values.forEach(row => {
            let cellRow = [];
            row.forEach(value => {
                cellRow.push(<Cell key={value} value={value} />);
            });
            cells.push(<Row key={row} className="g-0 flex-nowrap">{cellRow}</Row>);
        });
        return cells;
    }

    render = () => {
        return (
            <div className="border border-dark border-3 grid">
                {this.renderCells(this.props.values)}
            </div>
        );
    }
}

export default Grid;
