import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import Pagenotfound from './components/Pagenotfound';



const App = () => {
  return (
<>
<Router>
      <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        {/* Your navigation links can be added here */}
        <Switch>
          <Route path="/" exact component={<Username/>} />
          <Route path="/register" component={<Register/>} />
          <Route path="/password" component={<Password/>} />
          <Route path="/profile" component={<Profile/>} />
          <Route path="/reset" component={<Recovery/>} />
          <Route path="*" component={<Pagenotfound/>} />
        </Switch>
      </div>
    </Router>

    </>
  )
}

export default App