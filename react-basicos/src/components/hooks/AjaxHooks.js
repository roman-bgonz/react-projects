import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  //   useEffect(() => {
  //     let url = "https://pokeapi.co/api/v2/pokemon/";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         //console.log(json);
  //         json.results.forEach((el) => {
  //           fetch(el.url)
  //             .then((resp) => resp.json())
  //             .then((poke) => {
  //               //console.log(poke);
  //               let pokemon = {
  //                 id: poke.id,
  //                 name: poke.name,
  //                 avatar: poke.sprites.front_default,
  //               };

  //               setPokemons((pokemons) => [...pokemons, pokemon]);
  //             });
  //         });
  //       });
  //   }, []);

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      json.results.forEach(async (el) => {
        let resp = await fetch(el.url),
          poke = await resp.json();
        let pokemon = {
          id: poke.id,
          name: poke.name,
          avatar: poke.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Peticiones asíncronas en componente de clase</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id + 30} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
