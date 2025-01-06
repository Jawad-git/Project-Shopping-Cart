import PropTypes from "prop-types";
import styles from "./cart.module.css";
import Button from "../button/button";

const Cart = ({ cartItems, removeFromCart, products }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartDetails}>
        <h2 className={styles.h2}>Your Cart:</h2>
        <div className={styles.addedItems}>
          {[...cartItems].map(([key, value]) => {
            const product =
              products.fake.find((x) => x.id === key) ||
              products.featured.find((x) => x.id === key);
            return (
              <div className={styles.cartItem} key={product.id}>
                <h4>{`${value} ${product.title}, price: $${product.price} `}</h4>
                <Button
                  text="remove one"
                  onClick={() => removeFromCart(key, 1)}
                  classNameProp="removeButton"
                />
                <Button
                  text="remove all"
                  onClick={() => removeFromCart(key, value)}
                  classNameProp="removeButton"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.checkoutDetails}>
        <div className={styles.totalPrice}>
          Total price: $
          {[...cartItems].reduce((total, [key, value]) => {
            const product =
              products.fake.find((x) => x.id === key) ||
              products.featured.find((x) => x.id === key);

            if (product) {
              total += product.price * value;
            }
            return total;
          }, 0)}
        </div>
        <Button text="Check out" disabled={cartItems.size === 0} />
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};

export default Cart;
