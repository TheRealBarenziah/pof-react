import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './bodypoker.css';
import AboutMe from '../CatCard/mediaAreaFunc';
import PofForm from '../Pof/Pof'


export default class Body extends React.Component {
  
  render() {
    return (
        <Container>
          <Row>
            <Col xs="12">
              < AboutMe text="Still in construction !" title="Poker" image="http://placekitten.com/200/200" />
            </Col>
            <Col xs="12">
              < PofForm />
            </Col>
          </Row>
        </Container>
    );
  }
}