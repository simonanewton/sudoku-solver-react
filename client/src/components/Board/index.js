import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Cell from "../Cell";
import "./index.css";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValues: []
        }
    }

    resetValues = () => {
        this.setState({ userValues: [] });
    }

    renderCells = (values) => {
        let cells = [];
        values.forEach(row => {
            let cellRow = [];
            row.forEach(value => cellRow.push(<Cell value={value} />));
            cells.push(<Row className="m-0">{cellRow}</Row>);
        });
        return cells;
    }

    render = () => {
        return (
            <Container>
                <div className="border border-dark border-3">
                    {this.renderCells(this.props.values)}
                </div>
            </Container>
        );
    }
}

export default Board;
