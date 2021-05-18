export const getBMICategory = (bmi) => {
  let a;

  if (bmi <= 18.5) {
    a = 'Underweight';
  } else if (bmi > 18.5 && bmi < 25) {
    a = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    a = 'Overweight';
  } else if (bmi >= 30) {
    a = 'Obesity';
  }

  return a;
}