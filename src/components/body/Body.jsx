import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Carousel from '../slider/Slider'
import DismissableAlert from '../dismissableAlert/dismissableAlert'
import './body.css';
import QuotePuller from '../quotepuller/QuotePuller';


export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Container>
          < DismissableAlert />
         <Row>
          <Col>
            < Carousel />
          </Col>
          <Col >
            <QuotePuller />
          </Col>
          <Col >
            <QuotePuller />
          </Col>
          
          </Row>
        </Container>
      </div>
    );
  }
}