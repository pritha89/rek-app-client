import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Rekognition Console</h1>
                    <p>Upload your images for Rekognition</p>
                </div>
            </div>
        );
    }
}