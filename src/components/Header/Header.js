import React from 'react';
import {Link} from 'react-router';
import { Grid, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = (props)  => (
          <Navbar fixedTop  className='navbar-header-wrapper'>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand className='navbar-brand-logo'>
                  <a href="/"><span className='navbar-brand-text'>BIRDS</span>EYE</a>
                </Navbar.Brand>
              </Navbar.Header>

              <div className='pull-right'>
                <Link className='nav-item-link' to='/explore'>EXPLORE</Link>
                <Link className='nav-item-link' to='/visualize'>VISUALIZE</Link>
              </div>

            </Grid>
          </Navbar>
);

export default Header;
