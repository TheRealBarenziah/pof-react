import React from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import "./pof.css"

export default class PofForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({loading: false});
    }, 10)
  }
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
        <Button color="secondary" onClick={() => 
   9 |         this.setState({ loading : !this.state.loading})}>Click to do nothing</Button>
      </Form>
      
    );
  }
}