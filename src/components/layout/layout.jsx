import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname; // Get the current path
    if (path === "/store") {
      setBackground("Store");
      setActiveLink("Store");
    } else if (path === "/about") {
      setBackground("About");
      setActiveLink("About");
    } else {
      setBackground("Home");
      setActiveLink("Home");
    }
  }, [location]);

  const addToCart = (id, count) => {
    setCartItems((prevMap) => {
      const newMap = new Map(prevMap); // Create a new Map to ensure immutability
      newMap.set(id, (newMap.get(id) || 0) + Number(count)); // Update the count for the given id
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
      style={
        background !== "Store"
          ? { backgroundImage: `url(./${background}.jpg)` }
          : { backgroundColor: "rgb(66, 66, 85)" }
      }
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
