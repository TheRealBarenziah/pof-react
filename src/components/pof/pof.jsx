import React from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import PofButton from '../pof/pofButton'
import "./pof.css"

export default class PofForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">What is your hand?</Label>
          <Input type="textarea" name="text" id="handInput" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">How many players after you ?</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </Input>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Activate quantum computing (/!\ Use at own risk /!\)
          </Label>
        </FormGroup>
        < PofButton />
      </Form>
    );
  }
}