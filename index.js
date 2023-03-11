// Code your solutions in this file
function writeCards(namesArray, event) {
  let thankYouArray = [];
  for (let i = 0; i < namesArray.length; i++) {
    let thankYouMsg = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
    thankYouArray.push(thankYouMsg);
  }
  return thankYouArray;
}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
