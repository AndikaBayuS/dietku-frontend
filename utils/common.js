export function setUserData(userData) {
  localStorage.setItem("DIETKU_USER", JSON.stringify(userData));
}

export function getUserData() {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("DIETKU_USER"));
  }
}
