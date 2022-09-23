import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class ControlPanel extends Component {
    render = () => {
        return (
            <Card className="p-4 border-dark text-center d-grid gap-4 w-100">
                <div>
                    <h4 className="m-0 text-center text-nowrap">New Game</h4>
                    <hr className="mb-0"/>
                </div>
                <Button variant="outline-success" onClick={() => this.props.generate("easy")}>Easy Puzzle</Button>
                <Button variant="outline-primary" onClick={() => this.props.generate("medium")}>Medium Puzzle</Button>
                <Button variant="outline-danger" onClick={() => this.props.generate("hard")}>Hard Puzzle</Button>
                <Button variant="outline-dark" onClick={() => this.props.generate("random")}>Random Puzzle</Button>
            </Card>
        );
    }
}

export default ControlPanel;
