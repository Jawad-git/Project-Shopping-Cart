import styles from "./homePage.module.css";
import { Link, useOutletContext } from "react-router-dom";
import Button from "../../components/button/button";
const HomePage = () => {
  const { setActiveLink } = useOutletContext();
  return (
    <div className={styles.homePage}>
      <div className={styles.centerDiv}>
        <h1>The Odin Store</h1>
        <h2>The best store for Norse-related Products</h2>
        <Link to={"./store"}>
          <Button
            classNameProp="visitStore"
            text="Visit the Store"
            onClick={() => setActiveLink("Store")}
          ></Button>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
