import React from 'react';

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div style={{ borderBottom: 'thin solid gray' }}>
      <h4>{name}</h4>
      <h1>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h1>
      <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
      <br/>
      <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;
