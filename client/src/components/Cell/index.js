import React, { Component } from "react";
import "./index.css";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    componentDidMount = () => {
        this.setState({ value: this.props.value !== 0 ? this.props.value : null });
    }

    changeValue = (event) => {
        this.setState({ value: event.target.value });
    }

    render = () => {
        return (
            <div className="cell">
                <form>
                    <input type="number" min="1" max="9" maxLength="1" value={this.state.value} onChange={this.changeValue} />
                </form>
            </div>
        );

    }
}

export default Cell;
