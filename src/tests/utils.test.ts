import utils from '../utils/utils';

describe('utils', () => {
    describe('getGoogleImageExportURL', () => {
        it('returns a valid google image URL when image id is provided', () => {
            expect(utils.getGoogleImageExportURL('abc123')).toBe('https://drive.google.com/uc?id=abc123');
        });

        it('returns empty string when image id is empty', () => {
            expect(utils.getGoogleImageExportURL('')).toBe('');
        });
    });

    describe('getGoogleImageExportURLs', () => {
        it('maps each image id to a google image URL', () => {
            expect(utils.getGoogleImageExportURLs(['a1', 'b2'])).toEqual(['https://drive.google.com/uc?id=a1', 'https://drive.google.com/uc?id=b2']);
        });

        it('returns an empty array when no ids are provided', () => {
            expect(utils.getGoogleImageExportURLs([])).toEqual([]);
        });
    });

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
