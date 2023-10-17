function randomEquasion(num1, num2) {
    const arrayOfSymbols = ['+', '-', '*'];
    const randomSymbol = arrayOfSymbols[Math.floor(Math.random() * arrayOfSymbols.length)];
    if (randomSymbol === '+') {
        return {
            equasion: `${num1} + ${num2}`,
            result: `${num1 + num2}`
        }
    } else if (randomSymbol === '-') {
        return {
            equasion: `${num1} - ${num2}`,
            result: `${num1 - num2}`
        }
    } else {
        return {
            equasion: `${num1} * ${num2}`,
            result: `${num1 * num2}`
        }
    };
}

export default randomEquasion;