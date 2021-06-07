import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre componentes</h2>
        <p>{this.state.contador}</p>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo #1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo #2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
