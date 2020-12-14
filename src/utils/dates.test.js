import { formatDate, formatYearRange } from './dates';

describe('utils', () => {
  describe('dates', () => {
    test('formatDate', () => {
      expect(formatDate(-500)).toBe('500 b. C.');
      expect(formatDate(500)).toBe('500');
    });
    test('formatYearRange', () => {
      expect(formatYearRange(-500, -400)).toBe('500 b. C. - 400 b. C. (100)');
    });
  });
});
