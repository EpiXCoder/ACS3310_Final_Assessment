function isAllNumbers(input: number | string): boolean {
  if (typeof input === 'number') {
    return true; // if it's a number type, then it's all numbers
  } if (typeof input === 'string') {
    return /^\d+$/.test(input);
  }
  return false; // if input is neither a number nor a string
}

export default function formatPhoneNumber(number: number | string): string {
  const str = String(number);

  // Ensure the string has exactly 10 characters
  if (str.length !== 10 || !isAllNumbers(str)) {
    throw new Error('The input should be a 10-digit number or string.');
  }

  const areaCode = str.substring(0, 3);
  const firstThree = str.substring(3, 6);
  const lastFour = str.substring(6, 10);

  return `(${areaCode}) ${firstThree}-${lastFour}`;
}
