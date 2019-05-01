import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from'styled-components';
import {ButtonContainer, NavButton} from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-info navbar-dark px-sm-5">
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
                        <NavButton className="btn btn-info btn-sm">
                            Products
                        </NavButton>
                    </Link>
                </li>
                  <li className="nav-item ml-3">
                      <Link to="/" className="nav-link">
                          <NavButton className="btn btn-info btn-sm">
                              Services
                          </NavButton>
                      </Link>
                  </li>
                  <li className="nav-item ml-3">
                      <Link to="/" className="nav-link">
                          <NavButton className="btn btn-info btn-sm">
                              Invest
                          </NavButton>
                      </Link>
                  </li>
                  <li className="nav-item ml-3">
                      <Link to="/" className="nav-link">
                          <NavButton className="btn btn-info btn-sm">
                              Contact
                          </NavButton>
                      </Link>
                  </li>
                  <li className="nav-item ml-3">
                      <Link to="/" className="nav-link">
                          <NavButton className="btn btn-info btn-sm">
                              Categories
                          </NavButton>
                      </Link>
                  </li>
              </ul>
          <Link to='/cart' className="ml-auto">
                <ButtonContainer className="btn btn-info btn-sm">
                    <span className="mr-2">
                         <i className="fas fa-cart-plus"></i>
                    </span>
                    Cart
                </ButtonContainer>
          </Link>
          <Link to='/signin' className="nav-item">
              <ButtonContainer className="btn btn-info btn-sm">
                  <i className="far fa-user"></i> Sign In
              </ButtonContainer>
          </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link{
    color: var (--mainWhite)!important;
    font-size:1.3rem; //16px
    text-transform:capitalize;
  }  
`;

