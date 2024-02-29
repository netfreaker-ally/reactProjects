import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";
export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending Cart Data",
      })
    );
    async function sendCartData() {
      const response = await fetch(
        "https://reactreduxdemo-netfreaker-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data Faileddd");
      }
    }
    try {
      await sendCartData();

      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success",
          message: "Sent Cart Data",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "Sending Cart Data Failed!!",
        })
      );
    }
  };
}
export function fetchCartData() {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch(
        "https://reactreduxdemo-netfreaker-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not retrieve data");
      }

      const data = await response.json();
      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "Sending Cart Data Failed",
        })
      );
    }
  };
}
