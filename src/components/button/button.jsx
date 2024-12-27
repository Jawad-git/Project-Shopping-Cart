import styles from "./button.module.css";
import PropTypes from "prop-types";

const Button = ({ type = "button", text, onClick, buttonType, className }) => {
  const buttonClass = styles[buttonType] || ""; // Default to empty string if type doesn't exist

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${buttonClass} ${className}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  text: "Click me", // Default button text
  className: "", // Default empty className
  buttonType: "default",
  onClick: () => {}, // Default empty function
};

export default Button;
