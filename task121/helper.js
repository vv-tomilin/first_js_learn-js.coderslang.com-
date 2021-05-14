export const min = (a, b, c) => {
  let d;

  if (a<b && a<c) {
    d = a;
  } else if (b<a && b<c) {
    d = b;
  } else {
    d = c;
  }

  return d;
}