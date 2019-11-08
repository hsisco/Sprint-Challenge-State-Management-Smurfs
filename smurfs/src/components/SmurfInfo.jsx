import React, {useEffect} from 'react';
import SmurfCard from './SmurfCard';
import {fetchData} from '../actions';
import {connect} from 'react-redux';

const SmurfInfo = props => {
  useEffect(props => {
    props.fetchData()
  }, []);
  return (
    <div className="card">
      {props.error && <p>{props.error}</p>}
      {props.smurfData.map(data => (
        <SmurfCard key={data.id} data={data} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfData: state.smurfData,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {fetchData}
)(SmurfInfo);