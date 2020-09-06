import React from 'react';
import {
    Link
} from 'react-router-dom';
import { releases } from '../utils/constants';
import './downloads.css';

const Downloads = () => (
    <div className="container">
        <div className="row justify-content-center pad-top">
            <h1 className="display-4 text-center">Downloads</h1>
        </div>
        <div className="row">
            <table className="table table-hover table-striped">
                <tbody>
                    { releases.map((release) => (
                        <tr className="" key={`${release.name}-${release.logoUrl}`}>
                            <td>{release.logoUrl && <img src={release.logoUrl} alt="logo" width="150px" />}</td>
                            <td>{release.name}</td>
                            {release.release_types.stable ? <td><a href={release.release_types.stable.url}>Stable</a></td> : <td></td>}
                            {release.release_types.preRelease ? <td><a href={release.release_types.preRelease.url}>Pre-Release</a></td> : <td></td>}
                            <td>{release.name === "MSFS WebUI DevKit" ? <a href={release.instructionLink}>Install Instructions</a> : <Link to={release.instructionLink}>Install Instructions</Link>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default Downloads;