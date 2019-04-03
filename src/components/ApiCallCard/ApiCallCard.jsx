import React from 'react';
import axios from 'axios';
import './apicallcard.css'

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://jservice.io/api/random`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul className='myList'>
      <h4>GET test</h4>
        { this.state.persons.map(person => <li>Question is: {person.question}. Answer is: {person.answer}. Difficulty level is: {person.value}</li>)}
      </ul>
    )
  }
}