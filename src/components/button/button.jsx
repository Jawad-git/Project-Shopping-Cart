import styles from "./button.module.css";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  text,
  onClick,
  buttonType,
  classNameProp,
}) => {
  // check if the classes sent as props exist in the CSS module
  const buttonTypeClass = styles[buttonType] || ""; // such as assertive / dismissive / confirm etc..
  const buttonClass = styles[styles.button] || ""; // Default to empty string if type doesn't exist
  const classProp = styles[classNameProp] || "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonClass} ${buttonTypeClass} ${classProp}`}
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
