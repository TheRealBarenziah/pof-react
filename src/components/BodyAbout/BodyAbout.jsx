import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import DismissableAlert from '../DismissableAlert/DismissableAlert'
import './bodyabout.css';
import AboutMe from '../CatCard/MediaArea';
import ApiCallCard from '../ApiCallCard/ApiCallCard'

export default function BodyAbout() {
    return (
        <Container>
          < DismissableAlert />
          <Row>
            <Col>
              < AboutMe title="About me" text="This is a side project to toy with React. GitHub repo in footer. Stay safe <3" image="http://placekitten.com/150/150"/>
            </Col>
            <Col>
            <ApiCallCard />
            </Col>
          </Row>
        </Container>
    );
  }
