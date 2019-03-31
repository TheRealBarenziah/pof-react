import React, { Component } from 'react'
import MediaArea from './MediaArea'
import { Spinner , Button} from 'reactstrap'

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
        <MediaArea title="Cats" text="Test text" image="http://placekitten.com/100/100"/>
        <Button onClick={() => 
         this.setState({ loading : !this.state.loading})}>
            {buttonState}</Button>
        </div>
    )
  }
}
