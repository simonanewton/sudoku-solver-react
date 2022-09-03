import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./index.css";

class InputPanel extends Component {
    capitalizeDifficulty = (difficulty) => {
        return difficulty ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1) : "N/A";
    }

    render = () => {
        return (
            <Card className="p-3">
                <div className="p-2 d-flex justify-content-between w-100">
                    <h5 className="m-0">{`Difficulty: ${this.capitalizeDifficulty(this.props.difficulty)}`}</h5>
                    <p className="m-0">{`${this.props.time}s`}</p>
                </div>
                <hr className="mx-2 mb-3" />
                <div className="p-2 text-center">
                    <Button variant="outline-primary" className="mb-4 w-100" onClick={() => this.props.generate("")}>Reset Board</Button>
                    <Button variant="outline-success" className="w-100" onClick={() => {}}>Check Solution</Button>
                </div>
            </Card>
        );
    }
}

export default InputPanel;
