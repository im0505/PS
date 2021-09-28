/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function (emails) {
    let s = new Set();
    for (email of emails) {
      let ar = [];
      let ign = false,
        sep = false;
      for (let i = 0; i < email.length; i++) {
        let c = email[i];
        if (c === "@") sep = true;
        if (c === "+") ign = true;
        if (sep) ign = false;
        if (!sep && c === ".") continue;
        if (ign) continue;
        ar.push(c);
      }
  
      s.add(ar.join());
    }
    return s.size;
  };
  // regexp
  var numUniqueEmails = function(emails) {
      let output = new Set();
      let regExp = new RegExp(/[.]|[+]+(.*)/g);
      
      for (let email of emails) {
          let [prefix, sufix] = email.split('@');
          
          prefix = prefix.replace(regExp, '');
  
          output.add(`${prefix}@${sufix}`);
      }
  
      return output.size;
  };
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ]);
  