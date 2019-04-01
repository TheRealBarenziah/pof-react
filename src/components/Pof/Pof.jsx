import React, { Component } from 'react'
import table from './table'
import { Button, Container, Row, Col } from 'reactstrap'


export default class Pof extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: false
    }
  }
  playerHand = (input) => {
    input = prompt("What's your hand? Ex: AA, T9o, KJs, 72o");
    let handValue = (table[input])
    let gg = (handValue / 2)
    let display = Math.round(gg)
    if (display > 1) {
      alert("If you have less than " + display + "BB you should PUSH !")
    } else {
      alert("Please respect format, strongest card first. Ex: AA, T9o, KJs, 72o")
    }
  }
  pofvx = (input) => {
    input = prompt("What's your hand? Ex: AA, T9o, KJs, 72o")
    let peopleAfterPlayer = prompt("How many to speak after you ? 1-9")
    let handValue = (table[input])
    const gg = (handValue / peopleAfterPlayer)
    let display = Math.round(gg)
    if (display > 1) {
      alert("If you have less than " + display + "BB PUSH !")
    } else {
      alert("Please respect format, strongest card first. Ex: AA, T9o, KJs, 72o")
    }
  }

  render() {
    return (
      <div>
        < Container >
          <Row>
        <Col>
          <Button onClick={() =>
            this.playerHand()}>
            Click to execute pushOrFold.js</Button>
            </Col>
        <Col>
          <Button onClick={() =>
            this.pofvx()}>
            Click to execute pofvx.js</Button>
        </Col>
            </Row>
            </Container >
      </div >
    )
  }
}
