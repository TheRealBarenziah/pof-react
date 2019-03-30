import React, { Component } from 'react'
import MediaArea from './MediaAreaFunc'
import { Spinner , Button} from 'reactstrap'

/*
const testApi = [
  {
    text: "Hello world from API.",
    author: "TheRealBarenziah"
  }
]
*/



export default class QuotePuller extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({loading: false});
    }, 1000)
  }
  /*
  componentDidMount = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => 
      this.setState({chuckFacts : json})
      )
  }
  */
  render() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({loading: false});
      }, 1000)
      return <Spinner color="dark" />
    }
    const buttonState = this.state.loading? "Loaded" : "Reload cat card"
    return (
      <div>
        <MediaArea text="Cats" image="http://placekitten.com/100/100"/>
        <Button onClick={() => 
         this.setState({ loading : !this.state.loading})}>
            {buttonState}</Button>
        </div>
    )
  }
}
