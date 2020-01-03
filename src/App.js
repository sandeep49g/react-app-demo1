import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './router-demo/Nav.js'
import Home from './router-demo/Home.js';
import About from './router-demo/About.js';
import Users from './router-demo/Users.js';

function App() {
  return (
    <Router>
      <div className='app-main'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/users' exact component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
