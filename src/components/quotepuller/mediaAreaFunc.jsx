import React from 'react'
import { Media } from 'reactstrap';


const MediaArea = (props) => (
  <div>
    <Media>
      <Media left href="http://placekitten.com">
        <Media object data-src="placekitten.com/100/100" alt="Kitten" className="media-object" src={props.image} data-holder-rendered="true" />
      </Media>
      <Media body>
        <Media heading>
          {props.text}
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>


  </div>
)


export default MediaArea