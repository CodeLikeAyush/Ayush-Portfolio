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
            <nav id='navbox' className="navbar navbar-expand-lg navbar-light bg-dark fixed-top fs-4 w-100 skeleton">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{<ImageAvatars />}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/"
                                    activeclassname="is-active"
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "
                                    to="/aboutme"
                                    activeclassname="is-active"
                                >About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact"
                                    activeclassname="is-active"
                                >Contact Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/certificates"
                                    activeclassname="is-active"
                                >Certificates</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link " to="/projects"
                                    activeclassname="is-active"
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
