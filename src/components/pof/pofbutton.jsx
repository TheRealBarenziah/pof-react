import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'

export default function pofbutton(props) {
  return (
    
      <Button color="secondary" onClick={() => 
        this.setState({ loading : !this.state.loading})}>{props.text}</Button>
  )
}
