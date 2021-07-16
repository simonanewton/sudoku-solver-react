import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="p-4 justify-content-center">
            <Navbar.Brand>Sudoku Solver</Navbar.Brand>
        </Navbar>
    );
}

export default Header;
