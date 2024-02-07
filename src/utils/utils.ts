import globals from './globals';

/**
 * @deprecated This function should not be used.
 * @param imageIds
 */
const getGoogleImageExportURL = (imageId: string): string => {
    if (imageId !== '' && imageId !== null && imageId !== undefined) {
        //return "https://drive.google.com/uc?export=view&id=" + imageId;
        return 'https://drive.google.com/uc?id=' + imageId;
    }

    return '';
};

/**
 * @deprecated This function should not be used.
 * @param imageIds
 */
const getGoogleImageExportURLs = (imageIds: string[]): string[] => {
    let urls: string[] = [];

    if (imageIds.length > 0) {
        for (let i = 0; i < imageIds.length; i++) {
            let url = getGoogleImageExportURL(imageIds[i]);

            if (url !== '') {
                urls.push(url);
            }
        }
    }

    return urls;
};

/**
 * https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/
 * @deprecated No longer required.
 * @param html
 * @returns
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
const navigateToEmail = (subject: string, body: string) => {
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

const utils = {
    getGoogleImageExportURL,
    getGoogleImageExportURLs,
    decodeHTML,
    navigateToEmail,
    getYearsOfExperience,
};

export default utils;
