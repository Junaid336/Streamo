import React, { useEffect } from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";
import matchPath from "../../helper/matchPath";
import StreamForm from "./StreamForm";

const match = () => matchPath("streams/edit/:id");

const StreamEdit = (props) => {

  useEffect(()=>{
      props.fetchStream(match().params.id);   
  }, []);


  const getInitialValues = (stream) => {
    if(stream)
      return{
         title: stream.title,
         description: stream.description
      }
  }

  const onSubmit = formValues => {
    props.editStream(match().params.id, formValues);
  }
  
  return(
    <div>
      <h3>Edit Stream</h3>
      <StreamForm
       onSubmit={onSubmit}
       initialValues={getInitialValues(props.stream)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  
  return {stream: state.streams[match().params.id]};
}

export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit);