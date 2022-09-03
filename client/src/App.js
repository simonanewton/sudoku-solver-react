import React, { Component } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import InputPanel from "./components/InputPanel";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.timer = 0;
        this.state = {
            values: null,
            difficulty: null,
            time: 0
        };
    }

    startTimer = () => {
        if (this.timer === 0) {
            this.timer = setInterval(() => {
                this.setState({ time: this.state.time + 1 });
            }, 1000);
        }
    }

    stopTimer = () => {
        clearInterval(this.timer);
        this.timer = 0;
    }

    resetTimer = () => {
        this.stopTimer();
        this.setState({ time: 0 });
        this.startTimer();
    }

    generateNewBoard = (level) => {
        level ? this.resetTimer() : this.stopTimer();
        var requestParam = level ? "?difficulty=" + level : level;
        fetch(`https://sugoku.herokuapp.com/board${requestParam}`)
            .then(res => res.json())
            .then(res => this.setState({ values: res.board, difficulty: level }))
            .catch(err => console.log(err));    }

    componentDidMount = () => {
        this.generateNewBoard("random");
        this.startTimer();
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
                        <InputPanel difficulty={this.state.difficulty} time={this.state.time} generate={this.generateNewBoard} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
