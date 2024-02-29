import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "Expired";
  }
  return token;
}
export function loader() {
  return getAuthToken();
}
export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
}
export function getTokenDuration() {
  const storedexpirationData = localStorage.getItem("expiration");
  const expirationDate = new Date(storedexpirationData);
  const now = new Date();

  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
