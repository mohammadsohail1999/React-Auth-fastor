import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {useSelector} from "react-redux";

import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {LogOut} from '../actions/userActions';
// import { LinkContainer } from "react-router-bootstrap";


const Header = () => {

  const dispatch = useDispatch();

  const {userInfo} = useSelector(state=>state.userLogin);


  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand>Fastor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          
          {userInfo ? <Nav.Link onClick={()=>{dispatch(LogOut())}} > Log Out</Nav.Link> : <Link to="/login">log in</Link>}
          
             
           
             
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
