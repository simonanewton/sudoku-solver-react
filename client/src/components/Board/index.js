import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Row from "../Row";
import "./index.css";

class Board extends Component {
    render = () => {
        return (
            <Container className="p-3 d-flex justify-content-center">
                <div className="board">
                    <div>
                        <Row key={this.props.values.board[0]} values={this.props.values.board[0]} />
                        <Row key={this.props.values.board[1]} values={this.props.values.board[1]} />
                        <Row key={this.props.values.board[2]} values={this.props.values.board[2]} />
                        <Row key={this.props.values.board[3]} values={this.props.values.board[3]} />
                        <Row key={this.props.values.board[4]} values={this.props.values.board[4]} />
                        <Row key={this.props.values.board[5]} values={this.props.values.board[5]} />
                        <Row key={this.props.values.board[6]} values={this.props.values.board[6]} />
                        <Row key={this.props.values.board[7]} values={this.props.values.board[7]} />
                        <Row key={this.props.values.board[8]} values={this.props.values.board[8]} />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Board;
