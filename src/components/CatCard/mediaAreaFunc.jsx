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
          {props.title}
        </Media>
        {props.text}
      </Media>
    </Media>


  </div>
)


export default MediaArea