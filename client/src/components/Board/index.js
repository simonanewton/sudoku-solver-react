import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Grid from "../Grid";
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

    render = () => {
        return (
            <Container className="p-3">
                <Grid values={this.props.values} />
            </Container>
        );
    }
}

export default Board;
