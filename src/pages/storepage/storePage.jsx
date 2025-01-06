import PropTypes from "prop-types";
import ProductCard from "../../components/productCard/productCard";
import { useOutletContext } from "react-router-dom";
import styles from "./storePage.module.css";
import Cart from "../../components/cart/cart";

const StorePage = () => {
  const { cartItems, addToCart, removeFromCart, products, error, loading } =
    useOutletContext();

  {
    /* basically, the cart items is a map, product id -> count of that id purchased
      and products is the object with fake and featured objects pointing to the respective
      array of products. get the id from the map, and then compare it against the id of the 
      product in products.fake or products,featured. then we can have both the price of the 
      product and the count the user has added to their cart.
    */
  }

  {
    /*while the program is fetching data, display a loading message */
  }
  if (loading) return <p>Loading...</p>;
  {
    /*if there are errors, display them instead of the products */
  }

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

        {/* if the fake products are empty, display a message  */}
        {products.fake && products.fake.length == 0 && (
          <div>there are 0 fake products</div>
        )}
        {/* if there are no fake products at all, print it out */}
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
      <Cart
        cartItems={cartItems}
        products={products}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

StorePage.propTypes = {
  cartItems: PropTypes.array,
  products: PropTypes.object,
};

export default StorePage;
