import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Eventos en components de clase ES6</h3>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Eventos en components de clas ES7</h3>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}
