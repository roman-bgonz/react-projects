import React, { useState, useEffect } from "react";

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      console.log("Fase de desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]); // Solo se ejecuta cuando hay un cambio en la variable de visible

  return (
    <>
      <h2>Reloj con hooks</h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  );
}

function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}
