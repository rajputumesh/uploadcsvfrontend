import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <>
            <Navbar className='py-3' style={{background:"black"}}>
                <Container>
                    <NavLink to="/">
                        My Project
                    </NavLink>
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to="/score"> 
                            <button className='px-2 btn btn-link'>Score</button>
                        </NavLink>
                        <NavLink className="nav-link" to="/fielding"> 
                            <button className='px-2 btn btn-link'>Fielding</button>
                        </NavLink>
                        <NavLink className="nav-link" to="/batting"> 
                            <button className='px-2 btn btn-link'>Batting</button>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
