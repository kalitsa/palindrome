function Palindrome(str) {
  var reversed = str.split("").reverse().join("");
  if(reversed === str) {
    return "200";
  }else {
  return "400";
}
}



var pali = prompt("Please enter your word or phrase");
Palindrome(pali);
alert(Palindrome(pali));
