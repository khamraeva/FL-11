function reverseNumber(a) {
 var reversed = 0;
 while (a !== 0) {
  reversed = reversed * 10;
  reversed = reversed + a % 10;
  a = a - a % 10;
  a = a / 10;
 }
 return reversed;
}
reverseNumber(-456);
