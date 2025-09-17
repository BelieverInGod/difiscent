import React from "react";

function ProductCard({ name, price, img }) {
  return (
    <div className="product-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price} грн</p>
      <button>Купити</button>
    </div>
  );
}

export default ProductCard;
