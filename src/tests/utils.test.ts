import utils from '../utils/utils';

describe('utils', () => {
    describe('decodeHTML', () => {
        it('decodes encoded HTML entities', () => {
            expect(utils.decodeHTML('joe&#64;example.com')).toBe('joe@example.com');
        });
    });

    describe('getYearsOfExperience', () => {
        afterEach(() => {
            jest.useRealTimers();
        });

        it('returns expected years before work anniversary in a year', () => {
            jest.useFakeTimers().setSystemTime(new Date('2026-03-23'));

            expect(utils.getYearsOfExperience()).toBe(7);
        });

        it('returns expected years on or after work anniversary in a year', () => {
            jest.useFakeTimers().setSystemTime(new Date('2026-08-01'));

            expect(utils.getYearsOfExperience()).toBe(8);
        });
    });

    describe('isFormInputValid', () => {
        it('returns true for non-empty text', () => {
            expect(utils.isFormInputValid('Hello')).toBe(true);
        });

        it('returns false for whitespace-only input', () => {
            expect(utils.isFormInputValid('   ')).toBe(false);
        });
    });
});
