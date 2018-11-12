import React, { Component } from 'react';
import './App.css';

import Form from "react-jsonschema-form";


class App extends Component {



  render() {
    return (
            <div className="App">
              <form>
                <input value></input>
                <input value></input>
              </form>
              {/* <Form schema={schema}
              onChange={console.log("changed")}
              onSubmit={console.log("submitted")}
              onError={console.log("errors")} /> */}
            </div>
    );
  }
}

export default App;
