import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Carousel from '../Slider/Slider'
import './body.css';
import CatCard from '../CatCard/CatCard';
import Clock from '../Clock/Clock'

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Container>
         <Row>
          <Col xs="12">
            < Carousel />
          </Col>
          <Col xs="6" >
            <CatCard />
          </Col>
          <Col xs="6" >
            <CatCard />
          </Col>
          <Col xs="6" >
            <CatCard />
          </Col>
          <Col xs="6" >
            <CatCard />
          </Col>
            <Col xs="12">
            < Clock />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}