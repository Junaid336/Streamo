import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

const StreamList = (props) => {
  
  useEffect(()=>{
    props.fetchStreams();
  }, []);

  const renderAdmin = stream => {
    if(stream.userId === props.userId)
      return(
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui primary button'>
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className='ui negative button'>
            Delete
          </Link>
        </div>
      );
  }

  const renderedItems = props.streams.map(stream => {
    return(
      <div className='item' key={stream.id}>
        {renderAdmin(stream)}
        <i className='large middle aligned icon camera'></i>
        <div className='content'>
          <Link to={`/streams/${stream.id}`} className='header'>
            {stream.title}
          </Link>
          <div className='description'>{stream.description}</div>
        </div>
      </div>
    )
  });

  const create = props.isSignedIn ? (
    <div style={{textAlign: 'right'}}>
      <Link to='/streams/new' className='ui primary button'>
        Create Stream
      </Link>
    </div>
  ) : null ;

  return(
    <div className='ui celled list'>
      <h2>Streams</h2>
      {renderedItems}
      {create}
    </div>
  );
}



const mapStateToProps = state => {
  return {
    streams : Object.values(state.streams),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}
export default connect(
   mapStateToProps,
   {fetchStreams}
  )(StreamList);