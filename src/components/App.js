import '../styles/App.css';
import React from "react";

import { Router, Route, Redirect } from "react-router-dom";
import history from '../history';

import Login from './Login'
import Dashboard from './Dashboard';
import DepotDoc from './DepotDoc';
import Users from './Users';
import AddUser from './AddUser';
import Banner from './NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    
  }

  render() {
    return (
      <div>

        <Banner account={this.state.account}/>

        <Router history={history}>
          {/* Default route to ActiveElections component */}
          <Route path="/" exact>
            <Redirect to="/Login"/>
          </Route>

          {/* Route to Active election page */}
          <Route path="/Login" exact component={() => <Login />}/>
          <Route path="/Dashboard" exact component={() => <Dashboard />}/>
          <Route path="/Depot" exact component={() => <DepotDoc />}/>
          <Route path="/Users" exact component={() => <Users />}/>
          <Route path="/AddUser" exact component={() => <AddUser />}/>
        </Router>
      </div>
    )
  }
}
export default App;