import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./index.css";

class InputPanel extends Component {
    render = () => {
        return (
            <Card className="p-3 align-items-center">
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
            </Card>
        );
    }
}

export default InputPanel;
