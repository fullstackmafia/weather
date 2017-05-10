
var count = 0;


function cc(card) {
  // Only change code below this line

 if (card > 0 && card < 7) {
   count += 1;
 } else if (card > 6 && card < 10) {
   count += 0;
 } else if (card < 0 || card === 10 || isNaN(card)) {
  count-=1;
 }
   
  if(count > 0) return count + ' Bet';
  else return count + ' Hold';
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(9); cc(7); cc('K'); cc('A');
