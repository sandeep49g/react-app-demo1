import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './router-demo/Nav.js'
import Home from './router-demo/Home.js';
import About from './router-demo/About.js';
import Users from './router-demo/Users.js';
import UserDetails from './router-demo/UserDetails.js';
import UserProfile from './router-demo/UserProfile.js';

function App() {
  return (
    <Router>
      <div className='app-main'>
        <Nav />
        <Switch>
          <Route path='/' exact children={Home} />
          <Route path='/home' children={Home} />
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users' exact component={Users} />
          <Route path='/users/:userId' exact component={UserDetails} />
          {/* <Route path='/users/:userId/:profileId/:userName' exact>
              <UserProfile />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
