export const getLesserEvil = (threat1, threat2) => {
  let threat;

  if (threat1.evilFactor > threat2.evilFactor) {
    threat = threat2;
  } else {
    threat = threat1;
  }
  
  return threat;
}