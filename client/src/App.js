import React, { Component } from "react";
import Header from "./components/Header";
// import Generator from "./components/Generator";
import ControlPanel from "./components/ControlPanel";
import InputPanel from "./components/InputPanel";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: null
        }
    }

    generateNewBoard = () => {
        fetch("https://sugoku.herokuapp.com/board?difficulty=easy")
            .then(res => res.json())
            .then(res => this.setState({ values: res }))
            .catch(err => console.log(err));
    }

    componentDidMount = () => {
        this.generateNewBoard();
    }

    render = () => {
        return (
            <div>
                <Header />
                <div className="d-flex justify-content-center">
                    <div className="my-auto">
                        <ControlPanel />
                    </div>
                    <div className="mx-3">
                        {this.state.values ? <Board values={this.state.values} /> : null}
                    </div>
                    <div className="my-auto">
                        <InputPanel />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
