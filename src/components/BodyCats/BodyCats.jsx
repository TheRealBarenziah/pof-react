import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Carousel from '../Slider/Slider'
import './body.css';
import CatCard from '../CatCard/CatCard';


export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Container>
         <Row>
          <Col>
            < Carousel />
          </Col>
          <Col >
            <CatCard />
          </Col>
          <Col >
            <CatCard />
          </Col>
          
          </Row>
        </Container>
      </div>
    );
  }
}