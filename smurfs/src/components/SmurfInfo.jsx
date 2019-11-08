import React, {useEffect} from 'react';
import SmurfCard from './SmurfCard';
import {fetchData} from '../actions';
import {connect} from 'react-redux';

const SmurfInfo = props => {
    useEffect(()=> {
        props.fetchData()
    }, []);
    if (props.isFetching){
        return (
        <div className="loaderCSS">
        <h2>" It Doesn't Matter Where You Come From, It Only Matters Who You Choose To Be."</h2>
        <h3> => Papa Smurf (Smurfs2) </h3>
        </div>
        )
    }
    return (
        <div className="cardBG">
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