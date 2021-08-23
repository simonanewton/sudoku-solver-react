import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Grid from "../Grid";
import "./index.css";

class Board extends Component {
    render = () => {
        return (
            <Container className="p-3 d-flex justify-content-center">
                <div className="board">
                    <div className="d-flex">
                        <Grid key={this.props.values.board[0]} values={this.props.values.board[0]} />
                        <Grid key={this.props.values.board[1]} values={this.props.values.board[1]} />
                        <Grid key={this.props.values.board[2]} values={this.props.values.board[2]} />
                    </div>
                    <div className="d-flex">
                        <Grid key={this.props.values.board[3]} values={this.props.values.board[3]} />
                        <Grid key={this.props.values.board[4]} values={this.props.values.board[4]} />
                        <Grid key={this.props.values.board[5]} values={this.props.values.board[5]} />
                    </div>
                    <div className="d-flex">
                        <Grid key={this.props.values.board[6]} values={this.props.values.board[6]} />
                        <Grid key={this.props.values.board[7]} values={this.props.values.board[7]} />
                        <Grid key={this.props.values.board[8]} values={this.props.values.board[8]} />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Board;
