function positiveSum(arr) {
/* for the whole array [], if array[i] > 0
   add it to the total sum */
  var sum = 0
  for (i=0; i<arr.length; i++){
    if (arr[i] > 0){
     sum += arr[i]
    }
  }
document.write(sum);
}

positiveSum([90,-4,-8,2])