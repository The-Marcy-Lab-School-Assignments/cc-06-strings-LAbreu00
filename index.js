//Q1
const reverseString = (s) => {
  let e = "";
  for (i = s.length - 1; i >= 0; i--) {
    e += s[i];
  }
  return e;
};

//console.log(reverseString("hello"));
//console.log(reverseString("oo"));
//console.log(reverseString(""));

//Q2
const reverseZigZagString = (s) => {
  let e = "";
  for (i = s.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      e += s[i].toLowerCase();
    } else {
      e += s[i].toUpperCase();
    }
  }
  return e;
};

//console.log(reverseZigZagString("helloo"));
//console.log(reverseZigZagString("Fellows"));
//console.log(reverseZigZagString("Code Challenge"));
