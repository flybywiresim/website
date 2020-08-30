import React from 'react';
import {
    Link
  } from "react-router-dom";
import { stable_release_url, pre_release_url } from '../utils/constants';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
            <img src={require("../flybywire-huge.png")} width="135" height="60" className="home-logo" alt="flybywire-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Download</Link>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href={stable_release_url} download>Stable</a>
                        <a className="dropdown-item" href={pre_release_url} download>Beta</a>
                        <Link className="dropdown-item" to="/download/instructions">Instructions</Link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar;