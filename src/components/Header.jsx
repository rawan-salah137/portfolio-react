import React, { useState, useEffect } from 'react';

const links= [{title: 'About Me', url: '#about'}, {title: 'Education', url: '#Education'}, {title: 'Portfolio', url: '#portfolio'}, {title: 'Contact', url: '#contact'}];

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-black ">
                <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2">
                    {links.map((link, index) => {
                        return (
                            <li key={index} className="nav-item">
                                <a className="nav-link p-2 p-lg-3 m-2" aria-current="page" href={link.url}>{link.title}</a>
                            </li>
                        );
                    })}
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
};

export default Header;