function descendingOrder(n){
  numbers = Array.from(n.toString()).map(Number);
  numbers.sort(function(a,b){
    return b - a;
  })
  document.write(parseInt(numbers.join("")))
}
descendingOrder(48914)
