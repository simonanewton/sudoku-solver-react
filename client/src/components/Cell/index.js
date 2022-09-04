import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./index.css";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            active: false
        };
    }

    activateCell = () => {
        this.setState({ active: true });
    }

    deactivateCell = () => {
        this.setState({ active: false });
    }

    updateInput = (event) => {
        this.setState({ value: event.target.value });
    }

    componentDidMount = () => {
        this.setState({ value: "" });
        if (this.props.value > 0) this.setState({ value: this.props.value, preset: true });
    }

    render = () => {
        return (
            <Col className="p-0">
                {this.props.value ? <input disabled placeholder={this.props.value} /> :
                    <input onFocus={this.activateCell} onBlur={this.deactivateCell} onInput={this.updateInput}
                        className={`${this.state.active ? "active" : ""}`} />}
            </Col>
        );
    }
}

export default Cell;
