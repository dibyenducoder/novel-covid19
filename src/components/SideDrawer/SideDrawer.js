import React from 'react';
import './sidedrawer.css';
const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show)
    {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses} >
        <ul>
            <li><a href='/'>World Track</a></li>
            <li><a href='/map'>India Track</a></li>
            <li><a href='/'>Statistics</a></li>
            <li><a href='/about'>About</a></li>
        </ul>
    </nav>
    );
};

export default SideDrawer ;