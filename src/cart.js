import React, { useState } from 'react';

function Cart(props) {
  return (
    <div class="d-flex">
      <button class="btn btn-outline-dark" type="submit">
        <i class="bi-cart-fill me-1"></i>
        Cart
        <span class="badge bg-dark text-white ms-1 rounded-pill">
          {props.items}
        </span>
      </button>
    </div>
  );
}

export default Cart;