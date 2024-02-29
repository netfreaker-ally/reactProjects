const Input = ({ children, ...props }) => {
  return (
    <>
      <div>
        <label className="Auth">{children}</label>
        <input {...props} className=""></input>
      </div>
    </>
  );
};

export default Input;
