import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <nav className="nav">
            <a href="/">
                <h1>Pantry Pal</h1>
            </a>
            <ul>
                <li> <a href="/askai"> Ask AI </a> </li>
                <li className="active"> <a href="/signin"> Sign In </a> </li>
            </ul>
        </nav>
    )
}

export default Header;