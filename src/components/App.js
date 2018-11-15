import React, { Component } from 'react';
import Header from './Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        {/* <Route path="/AboutPage" component={AboutPage} /> */}
      </div>
    );
  }
}

export default App;
