import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
        <Link className="navbar-brand" to="/">React-Graphql</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Messages <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/new-message">New Message</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navigation;