import { StringifyPipe } from './stringify.pipe';

describe('ListPipe', () => {
  it('create an instance', () => {
    const pipe = new StringifyPipe();
    expect(pipe).toBeTruthy();
  });
});
