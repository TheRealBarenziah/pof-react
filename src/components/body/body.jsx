import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PofButton from '../pof/pofbutton'


export default class Body extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>Hello world.</p>
          </Col>
            <Col xs="12">
              < PofButton />
            </Col>
        </Row>
      </Container>
    );
  }
}