import { ConcatIdPipe } from './concat-id.pipe';

describe('ConcatIdPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatIdPipe();
    expect(pipe).toBeTruthy();
  });
});
