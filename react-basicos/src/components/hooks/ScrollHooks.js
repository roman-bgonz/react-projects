import React, { useEffect, useState } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Fase de montaje");
  }, []);
  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY} px</p>
    </>
  );
}
