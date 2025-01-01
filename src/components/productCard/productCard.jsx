import styles from "productCard.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../button/button";

const ProductCard = (id, description, addToCart, image, title, price) => {
  const [count, setCount] = useState(0);

  // find a way to make a state map, using IDs of products, and another state -- ?

  // state map, id -> count. if count goes under 1
  // (in the products display section, remove it emtirely)
  // loop over ids in our state map in the display section, list the count
  // of each product purchased, along with price for each,
  // along with title, along with a decrement button
  // and finally at the bottom, a checkout button (defunct)
  const onAddButtonClick = () => {
    addToCart(id, count);
    setCount(0);
  };

  return (
    <div className={styles.card}>
      <img src={image} className={styles.img}></img>
      <h2 className={styles.h2}>{title}</h2>
      <p className={styles.p}>{description}</p>
      <div className={styles.flexColumn}>
        <Button text="Add 1 to Cart" onClick={addToCart(id, 1)} />
        <h3>{price}</h3>
      </div>
      <div className={styles.inputSection}>
        <label htmlFor="count">Add to cart</label>
        <input
          id="count"
          type="number"
          value={count}
          onChange={(e) => e.target.value}
          className={styles.countInput}
        />
        <Button text="Confirm" onClick={onAddButtonClick} />
      </div>
    </div>
  );
};

ProductCard.proptTypes = {
  title: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};
