import template from '@src/index';

describe('template function', () => {
  it('should return correct string', () => {
    expect(template()).toBe('Template lib created with TypeScript');
  });
});
