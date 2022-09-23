import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Cell from "../Cell";
import "./index.css";

class Board extends Component {
    renderCells = (values) => {
        let cells = [];
        let numValues = 0;
        let numRows = 0;
        values.forEach(row => {
            let cellRow = [];
            row.forEach(value => cellRow.push(<Cell key={numValues++} value={value} />));
            cells.push(<Row key={numRows++} className="m-0 g-0 flex-nowrap">{cellRow}</Row>);
        });
        return cells;
    }

    render = () => {
        return (
            <div className="d-flex justify-content-center">
                <div className="bg-dark border border-dark border-5 d-flex position-relative">
                    <div>
                        {this.renderCells(this.props.values)}
                    </div>
                    <div className="vertical-line-1"></div>
                    <div className="vertical-line-2"></div>
                    <div className="horizontal-line-1"></div>
                    <div className="horizontal-line-2"></div>
                </div>
            </div>
        );
    }
}

export default Board;
