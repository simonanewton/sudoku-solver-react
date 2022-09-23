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
            time: 0,
            difficulty: null,
            values: null
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
        const requestParam = level ? "?difficulty=" + level : level;
        fetch(`https://sugoku.herokuapp.com/board${requestParam}`)
            .then(result => result.json())
            .then(data => this.setState({ values: data.board, difficulty: level }))
            .catch(err => console.log(err));
    }

    componentDidMount = () => {
        this.startTimer();
        this.generateNewBoard("random");
    }

    componentWillUnmount = () => {
        this.stopTimer();
    }

    render = () => {
        return (
            <main className="vh-100" id="content">
                <Header />
                <Container fluid={"xxl"} className="py-4 py-lg-5">
                    <Row className="g-0 justify-content-center">
                        <Col className="px-3 my-auto d-none d-xl-flex">
                            <ControlPanel generate={this.generateNewBoard} />
                        </Col>
                        <Col xs={12} md={6}>
                            {this.state.values ? <Board values={this.state.values} /> : null}
                        </Col>
                        <Col className="px-3 my-auto d-none d-xl-flex">
                            <InputPanel difficulty={this.state.difficulty} time={this.state.time}
                                stop={this.stopTimer} start={this.startTimer} generate={this.generateNewBoard} />
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default App;
