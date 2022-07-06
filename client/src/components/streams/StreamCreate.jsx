import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";


const StreamCreate = ({createStream}) => {

  return(
    <div>
      <h3>Create Stream</h3>
      <StreamForm onSubmit={formValues=>{createStream(formValues)}}/>
    </div>
  );
}

export default connect(null, {createStream})(StreamCreate);