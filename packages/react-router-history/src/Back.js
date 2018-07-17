import React from "react";
import { withRouter } from "react-router-dom";
import { browserHistory } from 'react-router';

const Back = () =>
 (
    <button onClick={browserHistory.goBack}>Back to previous page</button>
  );

export default Back;