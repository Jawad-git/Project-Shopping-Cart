import PropTypes from "prop-types";
import ProductCard from "../../components/productCard/productCard";
import { useOutletContext } from "react-router-dom";
import styles from "./storePage.module.css";
import Button from "../../components/button/button";

const StorePage = () => {
  const { cartItems, addToCart, removeFromCart, products, error, loading } =
    useOutletContext();

  if (loading) return <p>Loading...</p>;
  if (error.length > 0)
    return (
      <ul>
        {error.map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </ul>
    );

  return (
    <div className={styles.storePage}>
      <div className={styles.itemSection}>
        <h1 className={styles.h1}>Standard Products</h1>

        {products.fake && products.fake.length == 0 && (
          <div>there are 0 fake products</div>
        )}
        {!products.fake && <div>there are no fake products</div>}

        <div className={styles.products}>
          {products.fake &&
            products.fake.length > 0 &&
            products.fake.map((fakeProduct) => (
              <ProductCard
                key={fakeProduct.id}
                id={fakeProduct.id}
                description={fakeProduct.description}
                addToCart={addToCart}
                image={fakeProduct.image}
                title={fakeProduct.title}
                price={fakeProduct.price}
              />
            ))}
        </div>

        <h1 className={styles.h1}>Featured Products</h1>

        <div className={styles.products}>
          {products.featured &&
            products.featured.length > 0 &&
            products.featured.map((featuredProduct) => (
              <ProductCard
                key={featuredProduct.id}
                id={featuredProduct.id}
                description={featuredProduct.description}
                addToCart={addToCart}
                image={featuredProduct.image}
                title={featuredProduct.title}
                price={featuredProduct.price}
              />
            ))}
        </div>
      </div>
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
          <Button text="Check out" />
        </div>
      </div>
    </div>
  );
};

StorePage.propTypes = {
  cartItems: PropTypes.array,
  products: PropTypes.object,
};

export default StorePage;
