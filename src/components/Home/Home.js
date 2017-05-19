import React from 'react';
import './Home.css';
import heroBg from './hero-bg.png';
import webBg from './web-bg.png';
import birdseyeLogo from './birdseye-logo-bw.png';
import nasaLogo from './nasa-logo.png';

import { Image, Grid, Row, Col, Button } from 'react-bootstrap';

const Home = (props)  => (
        <Grid fluid>
          <Row className='nativeApp'>
            <Col md={6}>
              <section>
                <Image src={heroBg} />
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className='nativeApp-text'>
                  <h2>Saving endangered species.</h2>
                  <h2>Together</h2>
                  <br />
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
                  <br />
                </div>
                <Row>
                  <Col md={3}>
                    <Button href="/#/" className='btn-native'>IPHONE</Button>
                  </Col>
                  <Col md={3}>
                    <Button href="/#/" className='btn-native'>ANDROID</Button>
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>
          <Row className='mapRow'>
            <Col md={6} className='mapBg'>
              <section>
              <div className='hero-text'>
                <h2>Migratory travels and travel stories</h2>
                <br />
                <p>
                  The key to saving the world's endangered species is... us.
                  Technology can help people join forces in this crucial mission.
                  We need to become responsible. Now!
                </p>
                <p>
                  Anybody can contribute. One picture and our software does the rest.
                  With a powerful AI, you don't need to be a birds expert, our app
                  will recognize and classify the bird for you. Saving endangered species
                  hasn't been easier.'
                </p>
                <br />
              </div>
              <div>
               <Button href="/#/explore" className='btn-map'>Explore</Button>
              </div>

              </section>
            </Col>
            <Col md={6} className='mapBg'>
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
                    <li>Copyright {new Date().getFullYear()} | All Rights Reserved</li>
                    <li><span className='footer-text'>BIRDS</span>EYE: Saving endangered species. Together.</li>
                  </ul>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className='pull-right logos'>
                  <Image src={birdseyeLogo} responsive/>
                  <Image src={nasaLogo} responsive/>
                </div>
              </section>
            </Col>
          </Row>
        </Grid>
);

export default Home;
