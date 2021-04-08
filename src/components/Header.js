import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Click Name to sort by Name or use the Search box to filter your results!</p>
            </div>
        )
    }
}