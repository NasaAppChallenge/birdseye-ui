import React from 'react';
import './Home.css';
import heroBg from './hero-bg.png';
import webBg from './web-bg.png';
import birdseyeLogo from './birdseye-logo-bw.png';
import nasaLogo from './nasa-logo.png';

import { Image, Grid, Row, Col } from 'react-bootstrap';

const Home = (props)  => (
        <Grid fluid>
          <Row>
            <Col md={6}>
              <section>

              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className='hero-text'>
                  <h2>Saving endangered species.</h2>
                  <h2>Together</h2>
                  <p>
                    BirdsEye is a smart app to report endangered bird sightings
                    and track their migration through time. It uses advanced
                    machine learning techniques to identify bird species from
                    a single picture.
                  </p>
                  <p>
                    Natural events like bad weather, or predators keep many of
                    them from reaching their destination. This pales into
                    comparison with human actions who affect directly or
                    indirectly their seasonal home.
                  </p>
                </div>
              </section>
            </Col>
          </Row>
          <Row className='mapBg'>
            <Col md={6}>
              <section>
              <div className='hero-text'>
                <h2>Saving endangered species.</h2>
                <h2>Together</h2>
                <p>
                  BirdsEye is a smart app to report endangered bird sightings
                  and track their migration through time. It uses advanced
                  machine learning techniques to identify bird species from
                  a single picture.
                </p>
                <p>
                  Natural events like bad weather, or predators keep many of
                  them from reaching their destination. This pales into
                  comparison with human actions who affect directly or
                  indirectly their seasonal home.
                </p>
              </div>
              </section>
            </Col>
            <Col md={6} >
              <section>
                <Image src={webBg} responsive />
              </section>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <section>
                <div className='copyright'>
                  <ul>
                    <li>Copyright {new Date().getYear()} | All Rights Reserved</li>
                    <li><span className='footer-text'>BIRDS</span>EYE: Saving endangered species. Together.</li>
                  </ul>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className='pull-right logos'>
                  <Image src={birdseyeLogo} />
                  <Image src={nasaLogo} />
                </div>
              </section>
            </Col>
          </Row>
        </Grid>
);

export default Home;
