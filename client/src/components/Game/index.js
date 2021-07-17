import React from "react";
import { Container } from "react-bootstrap";
import Cell from "../Cell"

var Game = () => {
    return (
        <Container>
            <div className="p-4 d-flex">
                <Cell />
                <Cell />
                <Cell />
            </div>
        </Container>
    );
}

export default Game;
