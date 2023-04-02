function simpleArraySum(ar) {
  let sum = 0;

  ar.forEach(element => {
    sum += element;

  });


  return sum;

}

simpleArraySum ([1, 2, 3, 4, 10, 11]);