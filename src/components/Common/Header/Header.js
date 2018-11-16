import React from 'react';
import './Header.css';

const Header = ({ onSearchClick, onLuckyClick }) => {
    return (
        <div>
            <nav className="navbar navbar-inverse bg-dark fixed-top"><h3 style={{ color: "white" }}>OMDBApi</h3>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={onSearchClick}>Search</button>
                    <input className="form-control mr-sm-2" type="search" placeholder="IMDb Id or Name" aria-label="Search"></input>

                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={onLuckyClick}>Feeling lucky?</button>
                </form>
            </nav>
        </div>
    );
}

export default Header;
