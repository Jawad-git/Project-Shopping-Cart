import { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../components/productCard/productCard";
import { useOutletContext } from "react-router-dom";

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
    <div className="content">
      <div className="products">
        <h1>Standard Products</h1>
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
              price={fakeProduct.title}
            />
          ))}
        {products.fake && products.fake.length == 0 && (
          <div>there are 0 fake products</div>
        )}
        {!products.fake && <div>there are no fake products</div>}
        <h1>Featured Products</h1>
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
              price={featuredProduct.title}
            />
          ))}
      </div>
      <div className="cart">{/*map items in cart */}</div>
    </div>
  );
};

StorePage.propTypes = {
  cartItems: PropTypes.array,
  products: PropTypes.object,
};

export default StorePage;
