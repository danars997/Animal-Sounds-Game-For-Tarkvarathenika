import React, { Component } from 'react';
import { } from 'react-bootstrap';
import './style.css';

class Panel extends Component {

    render() {
        return (
            <div className="panel">
                <h3>{header}</h3>
                <p>{text}</p>
            </div>
        );
    }
}
const header="About us";
const text="We make cooking easy, fast and affordable for everybody! Experience the taste of fresh, home-made food, \n"
    + "using modern recipes from the best restaurants in the world.\n"
    + "We will provide you with all of the ingredients you need, in the right quantities, on your schedule.";
export default Panel;