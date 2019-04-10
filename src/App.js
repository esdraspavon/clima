import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Weather from "./components/Weather";

class App extends Component {
  state = {
    error: false,
    consult: {},
    result: {}
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.consult !== this.state.consult) {
      this.consultApi();
    }
  }

  consultApi = () => {
    const { city, country } = this.state.consult;
    if (city === "" || country === "") return null;

    const appId = "468a13ac2f9ea871e3995c86fe5e42a0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appId}`;

    //query con fetch api
    fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(datos => {
        this.setState({ result: datos });
      })
      .catch(error => {
        console.log(error);
      });
  };

  dataConsult = resp => {
    if (resp.city === "" || resp.country === "") {
      this.setState({ error: true });
    } else {
      this.setState({ consult: resp, error: false });
    }
  };

  render() {
    const error = this.state.error;
    let result;
    if (error) {
      result = <Error message="Ambos campos son obligatorios" />;
    } else {
      result = <Weather result={this.state.result} />;
    }

    return (
      <div className="App">
        <Header title="Clima React" />
        <Form dataConsult={this.dataConsult} />
        {result}
      </div>
    );
  }
}

export default App;
