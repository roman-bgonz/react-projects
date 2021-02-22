import React, { Component, Fragment } from 'react';

class PrimerComponente extends Component { 

    render() {
        let receta = {
            nombre: "Pizza",
            calorias: 560,
            ingredientes: [
                "Queso", "Masa", "Puré de tomate"
            ]
        };
        return (
            <Fragment>
                <h1>{ receta.nombre }</h1>
                <h2>{receta.calorias} </h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return (
                                <li key={i}>
                                    { ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr></hr>
            </Fragment>
        );
    }

}

export default PrimerComponente;