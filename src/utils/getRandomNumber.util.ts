export default function getRandomNumber(qtty = 5): string {
  if (typeof window !== 'undefined') {
    const array = new Uint32Array(qtty);
    return window.crypto.getRandomValues(array).join('-');
  } else {
    return `${Math.random() * 1000}`;
  }
}
