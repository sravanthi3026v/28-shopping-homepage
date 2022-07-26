import React, { useState } from 'react';

function Button(props) {
  const [render, setRender] = useState(true);
  const [addtocart, setAddtocart] = useState('Add to Cart');
  const addCart = () => {
    setRender(!render);
    setAddtocart('Remove from Cart');
  };
  const removeCart = () => {
    setRender(!render);
    setAddtocart('Add to Cart');
  };
  return (
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center">
        <div class="btn btn-outline-dark mt-auto">
          <button
            onClick={
              render
                ? () => {
                    props.CartCount();
                    addCart();
                  }
                : () => {
                    props.Cartitem();
                    removeCart();
                  }
            }
          >
            {addtocart}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Button;