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
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top fs-4 w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{<ImageAvatars />}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/"
                                    activeClassName="active"
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "
                                    to="/aboutme"
                                    activeClassName="active"
                                >About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact"
                                    activeClassName="active"
                                >Contact Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/certificates"
                                    activeClassName="active"
                                >Certificates</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link " to="/projects"
                                    activeClassName="active"
                                >Projects</NavLink>
                            </li>



                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}

                        </ul>

                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
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
