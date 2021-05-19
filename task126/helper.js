export const allTheSame = (x, y, z) => {
  let a;

  if (x === y && x === z && y === z) {
    a = true;
  } else {
    a = false;
  }

  return a;
}