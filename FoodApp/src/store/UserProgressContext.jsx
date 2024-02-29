import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckOut: () => {},
});
export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgerss] = useState("");
  function showCart() {
    setUserProgerss("cart");
  }
  function hideCart() {
    setUserProgerss("");
  }
  function showCheckout() {
    setUserProgerss("checkout");
  }
  function hideCheckOut() {
    setUserProgerss("");
  }
  const ctxValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckOut,
  };
  return (
    <UserProgressContext.Provider value={ctxValue}>
      {children}
    </UserProgressContext.Provider>
  );
}
export default UserProgressContext;
