import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Clima React" />
        <Form />
      </div>
    );
  }
}

export default App;
