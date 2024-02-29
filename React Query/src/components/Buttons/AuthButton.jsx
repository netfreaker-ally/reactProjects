const AuthButton = ({children,...props}) => {
  return ( 
    <div>
      <button {...props} type="submit">{children}</button>
    </div>
   );
}
 
export default AuthButton;