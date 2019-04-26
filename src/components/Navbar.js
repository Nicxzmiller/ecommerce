import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-info navbar-dark px-sm-5">
          {/*
              https://www.iconfinder.com/icons/1243689/call_phone_icon
              Creative Commons (Attribution 3.0 Unported);
              https://www.iconfinder.com/Makoto_msk */
              }
              <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand"/>
              </Link>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-3">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
                  <li className="nav-item ml-3">
                      <Link to="/" className="nav-link">
                          Services
                      </Link>
                  </li>
                  <li className="nav-item ml-3">
                      <Link to="/" className="nav-link">
                          Invest
                      </Link>
                  </li>
                  <li className="nav-item ml-3">
                      <Link to="/" className="nav-link">
                          Contact Us
                      </Link>
                  </li>
                  <li className="nav-item ml-3">
                      <Link to="/" className="nav-link">
                          Categories
                      </Link>
                  </li>
              </ul>
          <Link to='/cart' className="ml-auto">
                <ButtonContainer className="btn btn-info">
                    <span className="mr-2">
                         <i className="fas fa-cart-plus"></i>
                    </span>
                    Cart
                </ButtonContainer>
          </Link>
          <Link to='/'>
              <button className="btn btn-info">
                  <i className="far fa-user"></i> Sign In
              </button>
          </Link>
      </nav>
    );
  }
}

const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: ;
margin: 0.5rem;
background: transparent;
border:0.05rem solid;
border-radius:0.5rem;
`;
