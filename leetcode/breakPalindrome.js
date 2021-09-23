/**
 * @param {string} palindrome
 * @return {string}
 */
 var breakPalindrome = function (palindrome) {
    let str = palindrome;
    if (str.length == 1) return '';
    let l = str.length - 1;
    for (let i = 0; i <= l; i++) {
      if (str[i] === 'a') continue;
      else {
        if (i === (l-i)) continue;
        if (str[i] == str[l - i]) {
          let tmp = i == l ? '' : str.substring(i+1);
          return str.substring(0, i) + 'a' + tmp;
        }
      }
    }
    return str.substring(0, l) + 'b';
  };
  