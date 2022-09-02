import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Cell from "../Cell";
import "./index.css";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        }
    }

    renderCells = (values) => {
        let cellNum = 0;
        let rowNum = 100;
        let cellArray = [];
        for (let i = 0; i < values.length; i++) {
            let cellRow = [];
            for (let j = 0; j < values[i].length; j++) {
                cellRow.push(<Cell key={cellNum++} value={values[i][j]} />);
            }
            cellArray.push(<Row key={rowNum++} className="g-0 flex-nowrap">{cellRow}</Row>);

        }
        return cellArray;
    }

    componentDidMount = () => {
        this.setState({ values: this.props.values });
    }

    render = () => {
        return (
            <Container className="p-3">
                <div className="border border-dark border-3">
                    {this.renderCells(this.state.values)}
                </div>
            </Container>
        );
    }
}

export default Board;
