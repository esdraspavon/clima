import React, { Component } from "react";

class Form extends Component {
  //refs
  cityRef = React.createRef();
  countryRef = React.createRef();

  searchWeather = e => {
    e.preventDefault();

    //leer los refs y crear el objeto
    const response = {
      city: this.cityRef.current.value,
      country: this.countryRef.current.value
    };
    //Enviarlo por props
    this.props.dataConsult(response);
  };

  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.searchWeather}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="city" type="text" ref={this.cityRef} />
                <label htmlFor="city">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select id="country" ref={this.countryRef}>
                  <option value="" defaultValue>
                    Elige un país
                  </option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">Espana</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">Mexico</option>
                  <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">País:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-2 buscador">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large yellow accent-4"
                  value="Buscar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
