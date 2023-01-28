export function setUserData(userData) {
  localStorage.setItem("DIETKU_USER", JSON.stringify(userData));
}
