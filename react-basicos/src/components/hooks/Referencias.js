import React, { createRef, useRef } from 'react';

export default function Referencias(props) {
  let refMenu = useRef(),
    refMenuBtn = useRef();

  //console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    // const $menu = document.getElementById('menu');
    // if (e.target.textContent === 'Menu') {
    //   e.target.textContent = 'Cerrar';
    //   $menu.style.display = 'block';
    // } else {
    //   e.target.textContent = 'Menú';
    //   $menu.style.display = 'none';
    // }

    if (refMenuBtn.current.textContent === 'Menú') {
      refMenuBtn.current.textContent = 'Cerrar';
      refMenu.current.style.display = 'block';
    } else {
      refMenuBtn.current.textContent = 'Menú';
      refMenu.current.style.display = 'none';
    }
  };
  return (
    <>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menu
      </button>
      <nav id="menu" ref={refMenu} style={{ display: 'none' }}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
        <br />
      </nav>
    </>
  );
}
