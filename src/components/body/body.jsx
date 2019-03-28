import React from 'react';
import { Container, Col } from 'reactstrap';
import PofButton from '../pof/pofbutton'
import Carousel from '../slider/slider'
import './body.css';


export default class Body extends React.Component {
  render() {
    return (
      <div className="myBeautifulBackground">
        <Container>
          <Col>
            < Carousel />
          </Col>
          <Col>
            <p>Hello world.</p>
          </Col>
          <Col >
            < PofButton />
          </Col>

        </Container>
      </div>
    );
  }
}