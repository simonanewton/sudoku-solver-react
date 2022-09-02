import React, { Component } from "react";
import "./index.css";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            active: false,
            preset: false,
            valid: true
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

    validateInput = () => {
        const validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        validValues.forEach(valid => {
            if (this.state.value === valid) {
                this.setState({ valid: true });
                return true;
            };
        });

        this.setState({ valid: false });
        return false;
    }

    componentDidMount = () => {
        if (this.props.value > 0) this.setState({ value: this.props.value, preset: true });
        else this.setState({ value: "", preset: false });
    }

    render = () => {
        return (
            <div className="cell">
                {this.state.preset ?
                    <span className="preset">{this.state.value}</span> :
                    <form>
                        <input type="text" maxLength="1" value={this.state.value}
                            onFocus={this.activateCell} onBlur={this.deactivateCell}
                            onInput={this.updateInput} className={`${this.state.valid ? "" : "invalid"} ${this.state.active ? "active" : ""}`} />
                    </form>
                }
            </div>
        );
    }
}

export default Cell;
