import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart , setIsinCart] = useState(false);

  function handleAddToCart(){
    setIsinCart((isInCart) => !isInCart)
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleAddToCart}>{isInCart ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
