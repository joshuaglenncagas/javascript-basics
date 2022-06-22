//#region randomFraction
// generates random decimal value between 0 (inclusive) and 1(exclusive)
function randomFraction() {
  return Math.random();
}
console.log(randomFraction());
//#endregion

//#region randomWholeNumber

function randomWholeNum(){
  return Math.floor(Math.random()*20); // function rounds down
}
console.log(randomWholeNum());

//#endregion

//generate a random whole number within a range

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

console.log(randomRange(5,10));

 