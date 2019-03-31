import React, { Component } from 'react'
import table from './table'
import { Button} from 'reactstrap'


export default class Pof extends Component {
  constructor(props){
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

  render() {
    return (
      <div>
        <Button onClick={() => 
         this.playerHand()}>
            Click to execute pushOrFold.js</Button>
      </div>
    )
  }
}
