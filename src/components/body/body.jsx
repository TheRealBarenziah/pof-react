import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Carousel from '../slider/slider'
import DismissableAlert from '../dismissableAlert/dismissableAlert'
import './body.css';
import QuotePuller from '../quotepuller/QuotePuller';


export default class Body extends React.Component {
  render() {
    return (
      <div className="myBeautifulBackground">
        <Container>
          < DismissableAlert />
         <Row>
          <Col>
            < Carousel />
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