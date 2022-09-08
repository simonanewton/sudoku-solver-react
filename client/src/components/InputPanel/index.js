import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./index.css";

class InputPanel extends Component {
    capitalizeDifficulty = (difficulty) => {
        return difficulty ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1) : "N/A";
    }

    formartTime = (seconds) => {
        return new Date(seconds * 1000).toISOString().substring(14, 19);
    }

    render = () => {
        return (
            <Card className="p-3 border-dark w-100">
                <div className="p-2 pb-0 text-center">
                    <h4>{`Difficulty: ${this.capitalizeDifficulty(this.props.difficulty)}`}</h4>
                    <p className="m-0">{`Time: ${this.formartTime(this.props.time)}s`}</p>
                </div>
                <hr className="mx-2 mb-3" />
                <div className="p-2 text-center">
                    <Button variant="outline-danger" className="mb-4 w-100" onClick={() => this.props.stop()}>Stop Timer</Button>
                    <Button variant="outline-primary" className="mb-4 w-100" onClick={() => this.props.generate("")}>Clear Board</Button>
                    <Button variant="outline-success" className="mb-4 w-100" href="https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/" target="_blank">How To Play</Button>
                    <Button variant="outline-dark" className="w-100" href="https://github.com/simonanewton/sudoku-solver-react" target="_blank">Learn More</Button>
                </div>
            </Card>
        );
    }
}

export default InputPanel;
