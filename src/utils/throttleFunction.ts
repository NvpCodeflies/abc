// Throttling Function
const throttleFunction: Function = (func: Function, delay: number) => {
  // Previously called time of the function
  let prev: number = 0;
  return (...args: [func: Function, delay: number]) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously
    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

export default throttleFunction;
