import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./index.css";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    }

    updateInput = (event) => {
        this.setState({ input: event.target.value });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (!prevProps.value && this.props.value) this.setState({ input: "" });
    }

    render = () => {
        return (
            <Col className="border border-dark border-1">
                <input value={this.props.value ? this.props.value : this.state.input} disabled={!!this.props.value} onChange={this.updateInput} />
            </Col>
        );
    }
}

export default Cell;
