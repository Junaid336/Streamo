import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import matchPath from '../../helper/matchPath';
import history from '../../helper/history';
import Modal from '../Modal';

const match = () => matchPath('streams/delete/:id');

const StreamDelete = props => {

  useEffect(()=>{
    props.fetchStream(match().params.id);    
  }, []);

  const actions = (
    <>
      <button
       className='ui negative button'
       onClick={()=>props.deleteStream(match().params.id) }
      >
        Delete
      </button>
      <Link to='/' className='ui button'>
        Cancel
      </Link>
    </>
  );

  const content = props.stream ?
   `Are you sure you want to delete the stream with title: ${props.stream.title}?`
   : 'Are you sure you want to delete this stream?';
  
  return <Modal
   title='Delete Stream'
   onDismiss={()=>history.push('/')}
   actions={actions}
   content={content}
  />;
};

const mapStateToProps = state => {
  return {stream: state.streams[match().params.id]};
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
