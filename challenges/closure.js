// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: Because of lexical scope, it means nested functions have access to variables and other assets of their parent scope.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let summ = 0;
  for(let i = 1; i<=num; i++){
    function summati0n(){
      summ += i;
   }
   summati0n();
  }
  return summ;
}

console.log(summation(4));