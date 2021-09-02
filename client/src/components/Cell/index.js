import React, { Component } from "react";
import "./index.css";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            active: false,
            preset: false
        };
    }

    activateCell = () => {
        this.setState({ active: true });
    }

    deactivateCell = () => {
        this.setState({ active: false });
    }

    changeValue = (event) => {
        this.setState({ value: event.target.value });
    }

    componentDidMount = () => {
        if (this.props.value !== 0) this.setState({ value: this.props.value, preset: true });
        else this.setState({ value: "", preset: false });
    }

    render = () => {
        return (
            <div className="cell">
                {this.state.preset ?
                    <span className="preset">{this.state.value}</span> :
                    <form>
                        <input type="number" min="1" max="9" maxLength="1" value={this.state.value}
                            onFocus={this.activateCell} onBlur={this.deactivateCell}
                            onChange={this.changeValue} className={`${this.state.active ? "active" : ""}`} />
                    </form>
                }
            </div>
        );
    }
}

export default Cell;
