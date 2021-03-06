import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './styles.css';

class AppLayout extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/counter">Counter</Link>
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default AppLayout;
