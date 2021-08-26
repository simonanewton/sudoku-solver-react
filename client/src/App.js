import React, { Component } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import InputPanel from "./components/InputPanel";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: null,
            difficulty: null
        }
    }

    updateDifficulty = (value) => {
        this.setState({ difficulty: value });
    }

    generateNewBoard = (difficulty) => {
        this.updateDifficulty(difficulty);
        var requestParam = difficulty ? "?difficulty=" + difficulty : difficulty;
        fetch(`https://sugoku.herokuapp.com/board${requestParam}`)
            .then(res => res.json())
            .then(res => this.setState({ values: res }))
            .catch(err => console.log(err));
    }

    componentDidMount = () => {
        this.updateDifficulty("random");
        this.generateNewBoard("random");
    }

    render = () => {
        return (
            <div>
                <Header />
                <div className="d-flex justify-content-center">
                    <div className="my-auto">
                        <ControlPanel generate={this.generateNewBoard} />
                    </div>
                    <div className="mx-3">
                        {this.state.values ? <Board values={this.state.values} /> : null}
                    </div>
                    <div className="my-auto">
                        <InputPanel difficulty={this.state.difficulty} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
