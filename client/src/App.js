import { React, Component } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                "board": [[2, 7, 0, 0, 0, 0, 0, 0, 0], [0, 0, 5, 0, 0, 0, 0, 7, 0], [0, 8, 0, 0, 0, 0, 0, 0, 4],
                [0, 0, 0, 0, 0, 0, 0, 6, 0], [0, 0, 6, 0, 0, 0, 0, 0, 7], [7, 9, 8, 0, 1, 2, 3, 4, 0],
                [5, 0, 0, 7, 0, 6, 4, 8, 0], [0, 4, 3, 5, 2, 1, 7, 9, 6], [0, 6, 7, 8, 0, 4, 5, 0, 2]]
            }
        }
    }

    componentDidMount = () => {}

    render = () => {
        return (
            <div>
                <Header />
                <Board values={this.state.values.board} />
            </div>
        );
    }
}

export default App;
