import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Dashboard from './components/admin/Dashboard';
// import Profile from './components/admin/Profile';
import Home from './components/frontend/Home';

import MasterLayout from './layouts/admin/MasterLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Home}/>
          <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} /> } />
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
