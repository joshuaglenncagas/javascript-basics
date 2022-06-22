function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

function sum(arr,n){
  if (n<=0){
    return 0;
  }
  else{
    return sum(arr,n-1) + arr[n-1];
  }
}

let arr1 = [1,2,3,4,5]
console.log(multiply(arr1,1));
console.log(sum(arr1,2));