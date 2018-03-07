function Palindrome(str) {
  var reversed = str.split("").reverse().join("");
  if(reversed === str) {
    return "200";
  }else {
  return "400";
}
}



var pali = prompt("Please enter your word or phrase. If it's a Palindrome, we will return 200. If not, we will return 400");
Palindrome(pali);
alert(Palindrome(pali));
