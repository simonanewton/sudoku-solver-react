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
                    <p className="m-0">0s</p>
                </div>
                <hr className="mx-2" />
                <div className="mx-auto">
                    <div className="d-flex">
                        <Button variant="outline-secondary" size="lg" className="m-2 inputBtn">1</Button>
                        <Button variant="outline-secondary" size="lg" className="m-2 inputBtn">2</Button>
                        <Button variant="outline-secondary" size="lg" className="m-2 inputBtn">3</Button>
                    </div>
                    <div className="d-flex">
                        <Button variant="outline-secondary" size="lg" className="m-2 inputBtn">4</Button>
                        <Button variant="outline-secondary" size="lg" className="m-2 inputBtn">5</Button>
                        <Button variant="outline-secondary" size="lg" className="m-2 inputBtn">6</Button>
                    </div>
                    <div className="d-flex">
                        <Button variant="outline-secondary" size="lg" className="m-2 inputBtn">7</Button>
                        <Button variant="outline-secondary" size="lg" className="m-2 inputBtn">8</Button>
                        <Button variant="outline-secondary" size="lg" className="m-2 inputBtn">9</Button>
                    </div>
                </div>
                <hr className="my-3 mx-2" />
                <div className="p-2 text-center">
                    <Button variant="outline-success" className="w-100">Check Solution</Button>
                </div>
            </Card>
        );
    }
}

export default InputPanel;
