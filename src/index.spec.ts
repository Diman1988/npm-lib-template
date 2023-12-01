import template from '@src/index';

describe('template function', () => {
  it('should return correct string', () => {
    expect(template()).toBe(
      'This template library was specifically designed to work with TypeScript',
    );
  });
});
