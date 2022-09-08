import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    }

    resetTimer = () => {
        this.stopTimer();
        this.setState({ time: 0 });
        this.timer = 0;
        this.startTimer();
    }

    generateNewBoard = (level) => {
        level ? this.resetTimer() : this.stopTimer();
        var requestParam = level ? "?difficulty=" + level : level;
        fetch(`https://sugoku.herokuapp.com/board${requestParam}`)
            .then(res => res.json())
            .then(res => this.setState({ values: res.board, difficulty: level }))
            .catch(err => console.log(err));
    }

    componentDidMount = () => {
        this.startTimer();
        this.generateNewBoard("random");
    }

    render = () => {
        return (
            <div>
                <Header />
                <Container fluid className="my-5">
                    <Row className="justify-content-center">
                        <Col lg={3} className="px-4 my-auto">
                            <ControlPanel generate={this.generateNewBoard} />
                        </Col>
                        <Col lg="auto" className="p-0">
                            {this.state.values ? <Board values={this.state.values} /> : null}
                        </Col>
                        <Col lg={3} className="px-4 my-auto">
                            <InputPanel difficulty={this.state.difficulty} time={this.state.time}
                                pause={this.stopTimer} start={this.startTimer} generate={this.generateNewBoard} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
