// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerView from './components/CustomerView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={CustomerView} />
        {/* Add other routes if necessary */}
      </Switch>
    </Router>
  );
}

export default App;
