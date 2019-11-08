import React from 'react';
import {Card} from 'react-bootstrap';


const SmurfCard = (props) => {
    return (
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Name: {props.}</Card.Title>
          <Card.Text>
            Age: {props.}<br/>
            Height: {props.}<br/>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default SmurfCard