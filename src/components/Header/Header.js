import React from 'react';
import { Grid, Navbar, NavItem, Nav} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import './Header.css';
import logo from './birdseye-logo.svg';

const Header = (props)  => (
          <Navbar fixedTop fluid className='navbar-header-wrapper'>
            <Grid fluid>
              <Navbar.Header>
                <Navbar.Brand className='navbar-brand-logo'>
                  <a href="/"><img src={logo} alt='logo' /></a>
                </Navbar.Brand>
              </Navbar.Header>

              <Nav pullRight>
                <IndexLinkContainer  to='/'>
                    <NavItem eventKey={1}>HOME</NavItem>
                </IndexLinkContainer>
                <LinkContainer  to='/explore'>
                    <NavItem eventKey={2}>EXPLORE</NavItem>
                </LinkContainer>
                <LinkContainer  to='/visualize'>
                    <NavItem eventKey={3}>VISUALIZE</NavItem>
                </LinkContainer>
              </Nav>

            </Grid>
          </Navbar>
);
// className='nav-item-link'
// className='nav-item-link'
export default Header;
