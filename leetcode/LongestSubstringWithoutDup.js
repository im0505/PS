/**
 * @param {string} s
 * @return {number}
 */

var Queue = function () {
    this.pointer = -1;
    this.arr = null;
    this.push = function (arg) {
      if (!this.arr) {
        this.pointer++;
        this.arr = [];
      }
      this.arr.push(arg);
    };
    this.pop = function () {
      let tmp = this.arr[this.pointer];
      this.pointer += 1;
      return tmp;
    };
    this.getSize = function () {
      return this.arr.length - this.pointer;
    };
    this.head = function () {
      return this.arr[this.pointer];
    };
  };
  // Queue inplemented in hurry
  var lengthOfLongestSubstring = function (s) {
    let q = new Queue();
    let t = {};
    let mx = 0;
    for (c of s) {
      if (!t[c]) {
        q.push(c);
        t[c] = true;
        let len = q.getSize();
        mx = mx > len ? mx : len;
      } else {
        while (true) {
          let first = q.pop();
          delete t[first];
          if (first == c) {
            q.push(c);
            t[c] = true;
            break;
          }
        }
      }
    }
    return mx;
  };
  