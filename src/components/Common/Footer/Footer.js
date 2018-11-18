import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ url, footerText }) => {
    return (
        <div>
            <nav className="navbar fixed-bottom navbar-inverse bg-dark">
                <button className="btn btn-info">
                    <Link to={url} style={{ color: 'white' }}>{footerText}</Link>
                </button>
            </nav>
        </div>
    )
}


export default Footer;
