import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Carousel from '../Slider/Slider'
import './body.css';
import CatCard from '../CatCard/CatCard';

export default function BodyCats() {
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
          </Row>
        </Container>
      </div>
    );
  }

