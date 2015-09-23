
//## Arguments

  // * operation: A Function, takes no arguments, returns no useful value.
  // * num: the number of times to call `operation`

//## Resources

  // * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
  // * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

//## Hints

  // * Don't overthink it, the code should be rather simple.
  // * It's ok to use a loop in your implementation, bonus pointsif you use recursion instead.
  // * You may notice some output. That is coming from the function we passed you.
  // * You do not need to console.log anything.


function repeat(operation, num) {
  // SOLUTION GOES HERE
  if (num <= 0) return
  // this works to but is uses the while loop
  //while (num <= 0) return
  operation()
  return repeat(operation, --num)
}

 // Do not remove the line below
module.exports = repeat



// I have a long way to go before I get this recursion thing down.
