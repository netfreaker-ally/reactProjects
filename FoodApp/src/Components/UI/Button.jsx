const Button = ({ children, textOnly, className, ...props }) => {
  let CssClasses = textOnly ? "text-button" : "button";
  CssClasses += " " + className;
  return (
    <button className={CssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
