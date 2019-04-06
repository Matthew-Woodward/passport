import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../pages/AboutUs";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/AboutUs" component={About} />
      </div>
    </Router>
  )
};
export default App;
