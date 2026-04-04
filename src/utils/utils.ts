import globals from './globals';


/**
 * https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/
 * @deprecated No longer required.
 * @param html The encoded HTML string.
 * @returns The decoded plain-text value.
 */
const decodeHTML = (html: string): string => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    txt.id = 'temporary-textarea';
    var val = txt.value;
    txt.remove();
    return val;
};

/**
 * Opens the users default email program and populates it's subject and body.
 * @param subject Subject of the email.
 * @param body Body of the email.
 */
const navigateToEmail = (subject: string, body: string): void => {
    window.location.href = `mailto:${utils.decodeHTML(globals.obfuscatedEmailAddress)}?subject=${subject}&body=${body}`;
};

/**
 * Calculates my years of experience in the industry.
 * Yes I'm that lazy.
 * @returns Number of years.
 */
const getYearsOfExperience = (): number => {
    // (Started August 2019, but need to consider the additional year from placement)
    const startDate: Date = new Date('2018-08-01');

    const currentDate: Date = new Date();

    let yearsOfExperience: number = currentDate.getFullYear() - startDate.getFullYear();

    // Check if the current month and day is before your start date
    if (currentDate.getMonth() < startDate.getMonth() || (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
        yearsOfExperience--;
    }

    return yearsOfExperience;
};

/**
 * Validates whether the form input is valid.
 * @param value The text input by the user.
 * @returns True when the value contains non-whitespace characters.
 */
const isFormInputValid = (value: string): boolean => {
    return value.trim() !== '';
};

const utils = {
    decodeHTML,
    navigateToEmail,
    getYearsOfExperience,
    isFormInputValid,
};

export default utils;
