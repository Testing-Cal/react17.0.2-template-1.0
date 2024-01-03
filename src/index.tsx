import * as React from 'react'
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home';
import './style.css';
import Dashboard from "./dashboard";
import Listing from "./listing";

type AppState = {
    name: string
}

type AppProp = {

}

class App extends React.Component<AppProp,AppState> {
  constructor(props:AppProp) {
    super(props);
    this.state = {
      name: 'Welcome to Integrated Digital Platform'
    };
  }

  render() {
      return (
          <Router>
              <div>
                  <nav style={{margin: '20px'}}>
                      <Link to="/" style={{marginRight: '20px'}}>Home</Link>
                      <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
                      <Link to="/listing">Listing</Link>
                  </nav>
                  <Routes>
                      <Route path="/" element={<Home name={this.state.name}/>} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/listing" element={<Listing />} />
                  </Routes>
              </div>
          </Router>
      )
    /*return (
      <div>
        <Home name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );*/
  }
}

render(<App />, document.getElementById('root'));
