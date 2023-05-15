// import { Avatar, Link } from '@mui/material';
import React from 'react';
import GitHBtn from './GitHBtn';
import Button from '@mui/material/Button';


import ImageAvatars from './Avtar';

// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './index.css';

function Navbar() {

    return (
        <>
            <nav id='navbox' className="navbar navbar-expand-lg navbar-light bg-dark fixed-top fs-4 w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{<ImageAvatars />}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/"
                                    activeClassName="is-active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "
                                    to="/aboutme"
                                    activeClassName="is-active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                >About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact"
                                    activeClassName="is-active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                >Contact Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/certificates"
                                    activeClassName="is-active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                >Certificates</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link " to="/projects"
                                    activeClassName="is-active" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                >Projects</NavLink>
                            </li>


                        </ul>


                        <ul className="navbar-nav mx-4">
                            <li className="nav-item text-light">
                                <Button
                                    href="https://github.com/CodeLikeAyush"
                                    target="_blank" >{<GitHBtn />}
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
