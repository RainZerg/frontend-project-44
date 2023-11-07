export default (num1, num2) => {
  const arrayOfSymbols = ['+', '-', '*'];
  const randomSymbol = arrayOfSymbols[Math.floor(Math.random() * arrayOfSymbols.length)];
  if (randomSymbol === '+') {
    return {
      equasion: `${num1} + ${num2}`,
      result: `${num1 + num2}`,
    };
  } if (randomSymbol === '-') {
    return {
      equasion: `${num1} - ${num2}`,
      result: `${num1 - num2}`,
    };
  }
  return {
    equasion: `${num1} * ${num2}`,
    result: `${num1 * num2}`,
  };
}
