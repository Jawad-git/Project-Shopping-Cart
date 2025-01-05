import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import CustSupport from "../custSupport/custSupport";
import styles from "./layout.module.css";
import useFetchProducts from "./fetchFile";

const Layout = () => {
  const [background, setBackground] = useState("Home");
  const [cartItems, setCartItems] = useState(new Map());
  const [products, error, loading] = useFetchProducts();
  const [activeLink, setActiveLink] = useState("Home");

  const addToCart = (id, count) => {
    setCartItems((prevMap) => {
      const newMap = new Map(prevMap); // Create a new Map to ensure immutability
      newMap.set(id, (newMap.get(id) || 0) + count); // Update the count for the given id
      return newMap;
    });
  };

  const removeFromCart = (id, count) => {
    setCartItems((prevMap) => {
      const newMap = new Map(prevMap); // Create a new Map to ensure immutability
      const newCount = (newMap.get(id) || 0) - count;
      if (newCount > 0) {
        newMap.set(id, newCount); // Update the count if still positive
      } else {
        newMap.delete(id); // Remove item if count is zero or less
      }
      return newMap;
    });
  };

  const setBackgroundWrapper = (name) => {
    setBackground(name);
  };

  return (
    <div
      className={styles.layout}
      style={{ backgroundImage: `url(./${background}.jpg)` }}
    >
      <NavBar
        onLinkClick={setBackgroundWrapper}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <div className={styles.content}>
        <Outlet
          context={{
            cartItems,
            addToCart,
            removeFromCart,
            setActiveLink,
            products,
            error,
            loading,
          }}
        />
        {/* Renders the matched route content here */}
        <Footer />
        <CustSupport />
      </div>
    </div>
  );
};

export default Layout;
