const addNumber = (...numbers) => {
    let sum = 0;
    numbers.forEach(number => sum += number);
    return sum;
  };
  
  export default addNumber;