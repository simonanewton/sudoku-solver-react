import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Cell from "../Cell";
import "./index.css";

class Board extends Component {
    renderCells = (values) => {
        let cells = [];
        values.forEach(row => {
            let cellRow = [];
            row.forEach(value => cellRow.push(<Cell value={value} />));
            cells.push(<Row className="m-0 flex-nowrap">{cellRow}</Row>);
        });
        return cells;
    }

    render = () => {
        return (
            <Container className="d-flex position-relative">
                <div className="border border-dark border-5">
                    {this.renderCells(this.props.values)}
                </div>
                <div className="vertical-line-1"></div>
                <div className="vertical-line-2"></div>
                <div className="horizontal-line-1"></div>
                <div className="horizontal-line-2"></div>                
            </Container>
        );
    }
}

export default Board;
