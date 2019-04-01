import React from 'react';
import axios from 'axios';
import './apicallcard.css'

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul className='myList'>
      <h4>GET test</h4>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}