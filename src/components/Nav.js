import React from "react";
import SearchBox from "./SearchBox.js";

function Nav({ handleSearchChange }) {
    return (
        <nav className = "navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collpase row" id="navbarNav">
                <SearchBox handleSearchChange={handleSearchChange}/>
            </div>
        </nav>
    );
}

export default Nav;