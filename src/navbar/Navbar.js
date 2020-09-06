import React from 'react';
import {
    Link
  } from "react-router-dom";
import { releases } from '../utils/constants';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
            <img src={require("../logo_wide_transparent.png")} width="175" height="50" className="home-logo" alt="flybywire-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                    <Link className="nav-link" to="/changelog">Changelog</Link>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                    <Link className="nav-link" to="/media">Media</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Downloads</Link>
                    <div className="dropdown-menu" data-toggle="collapse" data-target=".navbar-collapse">
                        <Link className="dropdown-item" to="/downloads">All Downloads</Link>
                        { releases.map((release) => {
                            return release.name === "MSFS WebUI DevKit" ? <a className="dropdown-item" href={release.instructionLink}>{release.name}</a> : <Link className="dropdown-item" to={release.instructionLink} key={release.name}>{release.name}</Link>
                        })}
                    </div>
                </li>
            </ul>
        </div>

        <div className="nav-item nav-item-right">
            <div className="row justify-content-center pad-top discord-logo">
                <a href="https://discord.gg/UjzuHMU">
                    <img src="https://img.shields.io/discord/738864299392630914.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" alt="discord-logo" />
                </a>
            </div>
        </div>
    </nav>
)

export default Navbar;