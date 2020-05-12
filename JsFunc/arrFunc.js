const arr = [1, 2, 3, 4, 5];
const min = (_) => _.reduce((_, $) => (_ < $ ? _ : $));
const max = (_) => _.reduce((_, $) => (_ > $ ? _ : $));
const sum = (_) => _.reduce((p, c) => p + c);
console.log(min(arr));
console.log(max(arr));
console.log(sum(arr))