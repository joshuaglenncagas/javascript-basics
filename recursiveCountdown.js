//#region Problem Statement

/*you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1 */

//#endregion
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}

//#region Problem Statement

/*We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind. */

//#endregion

function countdown(n){
  if (n<=0)
    return [];
  else{
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countup(5));
console.log(countdown(5))