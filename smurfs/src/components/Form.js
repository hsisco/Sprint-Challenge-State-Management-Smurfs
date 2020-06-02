import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const Form = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: ''
  })

  const handleSubmit = e => {
    // console.log(newSmurf)
    props.addSmurf(newSmurf)
  }

  const handleChanges = e => {
    let name = e.target.name;
    setNewSmurf({ ...newSmurf, [name] : e.target.value})
  }

  return(
    <div className="form">
      <form>
        <input name="name" type="text" placeholder="Name" onChange={handleChanges}></input>
        <input name="age" type="text" placeholder="Age" onChange={handleChanges}></input>
        <input name="height" type="text" placeholder="Height" onChange={handleChanges}></input>
        <button type="submit" onClick={handleSubmit}>Add Smurf</button>
      </form>
    </div>
  )
}

export default connect(null, {addSmurf})(Form)