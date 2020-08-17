import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from '../src/components/PrivateRoute';
import BubblePage from '../src/components/BubblePage';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute exact path='/colors' component={BubblePage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
