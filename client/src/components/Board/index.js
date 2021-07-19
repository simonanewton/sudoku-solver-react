import React from "react";
import { Container } from "react-bootstrap";
import Grid from "../Grid";

var Board = () => {
    return (
        <Container className="p-4 d-flex justify-content-center">
            <div>
                <div className="d-flex">
                    <Grid />
                    <Grid />
                    <Grid />
                </div>
                <div className="d-flex">
                    <Grid />
                    <Grid />
                    <Grid />
                </div>
                <div className="d-flex">
                    <Grid />
                    <Grid />
                    <Grid />
                </div>
            </div>
        </Container>
    );
}

export default Board;
