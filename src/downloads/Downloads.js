import React from 'react';
import {
    Link
} from 'react-router-dom';
import { releases } from '../utils/constants';

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
                            <td><a href={release.release_types.stable && release.release_types.stable.url}>Stable</a></td>
                            <td><a href={release.release_types.preRelease && release.release_types.preRelease.url}>Pre-Release</a></td>
                            <td><Link to={release.instructionLink}>Install Instructions</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default Downloads;