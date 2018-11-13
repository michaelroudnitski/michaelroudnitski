import React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

export default () => (
  <div>
    <h2>About</h2>
    <h4>Under Construction!</h4>
    <Link to="/">
      <button className="btn btn-primary">Back to home</button>
    </Link>
  </div>
)