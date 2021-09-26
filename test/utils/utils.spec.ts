import gridBuilder from '../../src/utils/gridBuilder.util';
import getRandomValues from '../../src/utils/getRandomNumber.util';

describe('gridBuilder', () => {
  it('should be defined', () => {
    expect(gridBuilder).not.toEqual(undefined);
  });

  it('should throw an error if no argument is passed', () => {
    expect(() => gridBuilder()).toThrow('You must specify a grid length');
  });

  it('should throw an error if length argument is not a number', () => {
    expect(() => gridBuilder('43')).toThrow('Length must be a number');
  });

  it('should return an array', () => {
    expect(gridBuilder(1)).toBeInstanceOf(Array);
  });

  Array.from({length: 10}, () => Math.ceil(Math.random() * 144)).forEach(
    (length) => {
      it(`should return an array with the length passed, case for ${length}`, () => {
        expect(gridBuilder(length)).toHaveLength(length);
      });
    }
  );
});

describe('getRandomValues', () => {
  it('should be defined', () => {
    expect(getRandomValues).not.toEqual(undefined);
  });

  it('should return a number smaller or equal if window is not defined', () => {
    const randNumbers = Number(getRandomValues(34)) <= 1000;
    expect(randNumbers).toEqual(true);
  });

  it('should return a string with dashes if window is defined', () => {
    Object.defineProperty(global, 'window', {
      value: {
        crypto: {
          getRandomValues: () => ['9', '2'],
        },
      },
      writable: true,
    });
    expect(getRandomValues(3)).toEqual('9-2');
  });
});
