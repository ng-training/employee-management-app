import { StringifyPipe } from './stringify.pipe';

describe('Stringify Pipe', () => {
  let pipe: StringifyPipe;

  beforeEach(() => {
    pipe = new StringifyPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('can handle undefined', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('can handle one value', () => {
    expect(pipe.transform('1')).toBe('1');
  });

  it('can handle multiple values', () => {
    const input = ['1', '2', '3'];
    const expected = '1, 2, 3';

    const output = pipe.transform(input);

    expect(output).toBe(expected);
  });
});
