// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let initialCount = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
       initialCount += birdsPerDay[i];
    }
    return initialCount;
  } 
  totalBirdCount([1, 2, 3, 4]);
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let initialCount = 0;
    
    const start = (week - 1) * 7; 
    const end = start + 7;
  
    // Sum up the bird count for the specified week
    for (let i = start; i < end; i++) {
      initialCount += birdsPerDay[i];
    }
    return initialCount;
  }
  console.log(birdsInWeek([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 2)); 
  
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i++) {
      if (i % 2 === 0) {
        birdsPerDay[i] += 1;
      }
    }
    return birdsPerDay;
  }
  