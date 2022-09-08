import React from "react";
import { Navbar } from "react-bootstrap";
import "./index.css"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="p-3 mb-4 justify-content-center">
            <Navbar.Brand id="header-title">Sudoku Solver</Navbar.Brand>
        </Navbar>
    );
}

export default Header;
