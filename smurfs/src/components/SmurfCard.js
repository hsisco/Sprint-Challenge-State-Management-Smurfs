import React from 'react';
import Card from 'react-bootstrap/Card';

const SmurfCard = (props) => {
  // console.log(props);
  const handleClick = e => {
    props.deleteSmurf();
    console.log("e", e.target.value, props)
  }

  return (
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="name">{props.data.name}</Card.Title>
          <Card.Text>
            Age: {props.data.age}<br/>
            Height: {props.data.height}<br/>
          </Card.Text>
          <button value={props.data.id} onClick={handleClick}>Delete</button>
        </Card.Body>
      </Card>
    )
};

export default SmurfCard