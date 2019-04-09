import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";

class App extends Component {
  state = {
    error: false
  };

  dataConsult = resp => {
    if (resp.city === "" || resp.country === "") {
      this.setState({ error: true });
    } else {
      console.log("okay");
    }
  };

  render() {
    const error = this.state.error;
    let resultado;
    if (error) {
      resultado = <Error message="Ambos campos son obligatorios" />;
    }

    return (
      <div className="App">
        <Header title="Clima React" />
        <Form dataConsult={this.dataConsult} />
        {resultado}
      </div>
    );
  }
}

export default App;
