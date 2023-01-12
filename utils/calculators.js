export const calcCaltion = (weight, height, age, gender) => {
  if (gender === "male") {
    return 88.4 + 13.4 * weight + 4.8 * height - 5.68 * age;
  } else {
    return 447.6 + 9.25 * weight + 3.1 * height - 4.33 * age;
  }
};
