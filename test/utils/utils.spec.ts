import gridBuilder from '../../src/utils/gridBuilder.util';

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
