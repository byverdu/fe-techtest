/**
 * Builds array with same length as the argument passed
 * @param {number} length Desired grid length
 * @returns Array
 */
export default function gridBuilder(length: number): number[] {
  if (!length) throw new Error('You must specify a grid length');
  if (typeof length !== 'number')
    throw new TypeError('Length must be a number');

  return Array.from({ length }, (_, index) => index + 1);
}
