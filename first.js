function outer() {
  let counter = 0; // variable inside outer

  function inner() {
    counter++; 
    return counter;
  }

  return inner; // return the inner function
}

const add = outer(); 

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
