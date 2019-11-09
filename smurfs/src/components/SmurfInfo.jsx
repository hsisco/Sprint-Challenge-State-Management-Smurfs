import React, { useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import SmurfCard from './SmurfCard';
import { fetchData, deleteSmurf } from '../actions';
import { connect } from 'react-redux';

const SmurfInfo = props => {
  // console.log(props.deleteSmurf);
  useEffect(() => props.fetchData());
  return (
    <div className="cards">
      <CardDeck>
        {props.smurfData.map(data => (
          <SmurfCard 
            key={data.id} 
            data={data} 
            deleteSmurf={deleteSmurf}/>
        ))}
      </CardDeck>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    smurfData: state.smurfData,
  }
};

export default connect(
  mapStateToProps,
  {fetchData, deleteSmurf}
)(SmurfInfo);