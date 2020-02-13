function getLength(speed) {
  let value = 0;
  for (var i = 1; i <= speed; i++) {
    for (let j = 1; j <= i; j++) {
      value += 1;
    }
  }
  return value;
}
// console.log(getLength(5));

function getSpeed(length) {
  let cnt = 1;
  if (length === 0) return 0;
  if (length === 1) return 1;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (cnt === length) {
        return i;
      }
      cnt++;
    }
  }
  return;
}
console.log(getSpeed(2 ** 31));
