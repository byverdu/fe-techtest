export default function gridBuilder(length: number) {
  if (!length) throw new Error('You must specify a grid length');
  if (typeof length !== 'number')
    throw new TypeError('Length must be a number');

  return Array.from({length}, (_, index) => index + 1);
}
