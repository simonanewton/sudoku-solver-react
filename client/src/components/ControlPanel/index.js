import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class ControlPanel extends Component {
    render = () => {
        return (
            <Card className="d-grid gap-4 p-4 text-center">
                <div>
                    <h3 className="m-0 text-center">New Game</h3>
                    <hr className="mb-0"/>
                </div>
                <Button variant="outline-success">Easy Puzzle</Button>
                <Button variant="outline-warning">Medium Puzzle</Button>
                <Button variant="outline-danger">Hard Puzzle</Button>
                <Button variant="outline-dark">Random Puzzle</Button>
                <div>
                    <hr className="mt-0" />
                    <Button variant="outline-primary" className="mt-2 w-100">Reset Board</Button>
                </div>
            </Card>
        );
    }
}

export default ControlPanel;
