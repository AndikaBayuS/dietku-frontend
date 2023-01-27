export const calcCaltion = (weight, height, age, gender) => {
  let caltion = 0;
  if (gender === "male") {
    caltion = 88.4 + 13.4 * weight + 4.8 * height - 5.68 * age;
    return Math.round(caltion);
  } else {
    caltion = 447.6 + 9.25 * weight + 3.1 * height - 4.33 * age;
    return Math.round(caltion);
  }
};
