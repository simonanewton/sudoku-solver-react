import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./index.css";

class Generator extends Component {
    render = () => {
        return (
            <div className="d-flex justify-content-center pt-3">
                <Button variant="outline-primary" onClick={this.props.generate}>New Board</Button>
            </div>
        );
    }
}

export default Generator;
