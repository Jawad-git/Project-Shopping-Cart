import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import CustSupport from "../custSupport/custSupport";
import styles from "./layout.module.css";

const Layout = () => {
  const [background, setBackground] = useState("Home");
  const [addedToCart, setAddedToCart] = useState(new Map());
  const addToCart = (id, count) => {
    setAddedToCart((prevMap) => {
      const newMap = new Map(prevMap); // Create a new Map to ensure immutability
      newMap.set(id, (newMap.get(id) || 0) + count); // Update the count for the given id
      return newMap;
    });
  };

  // function to import the products using useEffect

  const setBackgroundWrapper = (name) => {
    setBackground(name);
  };

  return (
    <div
      className={styles.layout}
      style={{ backgroundImage: `url(./${background}.jpg)` }}
    >
      <NavBar onLinkClick={setBackgroundWrapper} />
      <div className={styles.content}>
        <Outlet cartItems={addedToCart} addToCart={addToCart} />
        {/* Renders the matched route content here */}
        <Footer />
        <CustSupport />
      </div>
    </div>
  );
};

export default Layout;
