import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import Logo from '../image/letter-s-logo-vector_23987-138.jpg';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [navBarBackground, setNavBarBackground] = useState(false)

    const toggle = () => setIsOpen(!isOpen);

    const changeBackground = () => {
        if (window.scrollY >= 80){
            setNavBarBackground(true)
        }else {
            setNavBarBackground(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Navbar className={navBarBackground ? 'navbarbackground active' : 'navbarbackground'} expand="md">
                        <Link to="/"> <img className="navLogo" src={Logo} alt="oops Error Detacted"/> </Link>
                        <NavbarToggler onClick={toggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="m-auto ">
                                <NavItem>
                                    <Link className="nav-link" to="/">Home</Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link" to="aboutUs">About Us</Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link" to="/team">Team</Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link" to="/class">class</Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link" to="/coming">Coming</Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link" to="/todoapp">Todoapp</Link>
                                </NavItem>
                            </Nav>


                            <Link to="/login"> <Button  className="btn-nav" variant="contained">Sing Up</Button></Link>


                        </Collapse>
                    </Navbar>
                </div>
            </div>
        </>

    );
};

export default Navigation;