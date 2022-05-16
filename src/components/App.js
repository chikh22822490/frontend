import '../styles/App.css';
import React from "react";

import { Router, Route, Link, Redirect } from "react-router-dom";
import history from '../history';

import Login from './Login'
import Dashboard from './Dashboard';
import DepotDoc from './DepotDoc';
import Users from './Users';

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
        <Router history={history}>
          {/* Default route to ActiveElections component */}
          <Route path="/" exact>
            <Redirect to="/Login"/>
          </Route>

          {/* Navbar */}
          <nav className="navbar navbar-dark shadow" style={{backgroundColor: "#1b2021", height: "60px", color: "white", marginBottom: "50px"}}>
            <Link to = "/Dashboard"><b style = {{cursor: "pointer", color: "white"}}>Dashboard</b></Link>
          </nav>

          {/* Route to Active election page */}
          <Route path="/Login" exact component={() => <Login />}/>
          <Route path="/Dashboard" exact component={() => <Dashboard />}/>
          <Route path="/Depot" exact component={() => <DepotDoc />}/>
          <Route path="/Users" exact component={() => <Users />}/>
        </Router>
      </div>
    )
  }
}
export default App;