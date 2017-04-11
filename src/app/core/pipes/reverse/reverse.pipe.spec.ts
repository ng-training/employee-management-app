import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('can handle undefined', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('can handle one value', () => {
    expect(pipe.transform('A')).toBe('A');
  });

  it('can reverse', () => {
    expect(pipe.transform('abc')).toBe('cba');
  });
});
