import React, { Component } from "react";
import Header from "./components/Header";
import Generator from "./components/Generator";
import Board from "./components/Board";
import './App.css';

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
                <Generator generate={this.generateNewBoard} />
                {this.state.values ? <Board values={this.state.values} /> : null}
            </div>
        );
    }
}

export default App;
