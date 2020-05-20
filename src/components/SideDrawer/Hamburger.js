import React from 'react';
import './Hamburger.css';

const Hamburger = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
    </button>
);
export default Hamburger;