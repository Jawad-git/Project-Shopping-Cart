import styles from "./button.module.css";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  text,
  onClick,
  buttonType,
  classNameProp,
}) => {
  const buttonClass = styles[buttonType] || ""; // Default to empty string if type doesn't exist
  const stylesButton = styles[styles.button] || ""; // Default to empty string if type doesn't exist

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${stylesButton} ${buttonClass} ${styles[classNameProp]}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  classNameProp: PropTypes.string,
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  text: "Click me", // Default button text
  classNameProp: "", // Default empty className
  buttonType: "default",
  onClick: () => {}, // Default empty function
};

export default Button;
