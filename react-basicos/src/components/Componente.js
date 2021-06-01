import React, { Component } from "react";

/**
 * Componente basado en clase
 */
// class Componente extends Component {
//   render() {
//     return (
//       <div>
//         Hola soy un componente
//         <br />
//         {this.props.msg}
//       </div>
//     );
//   }
// }

/**
 * Componente basado en funcion
 */

// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

/**
 * Arrow function
 */

const Componente = (props) => <h2>{props.msg}</h2>;

export default Componente;
