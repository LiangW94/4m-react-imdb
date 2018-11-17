import React from 'react';
import './Header.css';

const style = {
    color: {
        color: 'white'
    }
}

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse bg-dark fixed-top">
                <h3 style={style.color}>OMDBApi</h3>
            </nav>
        </div>
    );
}

export default Header;
