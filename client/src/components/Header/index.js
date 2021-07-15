import React from "react";
import { Navbar } from "react-bootstrap";

var Header = () => {
    return (
        <Navbar variant="primary" expand="lg" className="p-4">
            <h1 className="text-center">Sudoku Solver</h1>
        </Navbar>
    );
}

export default Header;
