import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Grid from "../Grid";
import "./index.css";

class Board extends Component {
    render = () => {
        return (
            <Container className="p-4 d-flex justify-content-center">
                <div className="board">
                    <div className="d-flex">
                        <Grid values={this.props.values[0]} />
                        <Grid values={this.props.values[1]} />
                        <Grid values={this.props.values[2]} />
                    </div>
                    <div className="d-flex">
                        <Grid values={this.props.values[3]} />
                        <Grid values={this.props.values[4]} />
                        <Grid values={this.props.values[5]} />
                    </div>
                    <div className="d-flex">
                        <Grid values={this.props.values[6]} />
                        <Grid values={this.props.values[7]} />
                        <Grid values={this.props.values[8]} />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Board;
