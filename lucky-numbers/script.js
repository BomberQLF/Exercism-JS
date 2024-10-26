// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    let sum1 = Number(array1.join(''));
    let sum2 = Number(array2.join(''));
    return sum1 + sum2;
  }
  
  /**
   * Checks whether a number is a palindrome.
   *
   * @param {number} value
   * @returns {boolean} whether the number is a palindrome or not
   */
  export function luckyNumber(value) {
    return String(value).split('').reverse().join('') == String(value);
  }
  
  /**
   * Determines the error message that should be shown to the user
   * for the given input value.
   *
   * @param {string|null|undefined} input
   * @returns {string} error message
   */
  export function errorMessage(input) {
    if (!isNaN(Number(input)) && Number(input) !== 0) {
      return '';
    } else if (input === '' || input === null || input === undefined) {
      return "Required field";
    } else {
      return "Must be a number besides 0";
    }
  }
  