/**
 * @depricated This function should not be used.
 * @param imageIds
 */
const getGoogleImageExportURL = (imageId: string): string => {
    if (imageId !== "" && imageId !== null && imageId !== undefined) {
        //return "https://drive.google.com/uc?export=view&id=" + imageId;
        return "https://drive.google.com/uc?id=" + imageId;
    }

    return "";
}

/**
 * @depricated This function should not be used. 
 * @param imageIds
 */
const getGoogleImageExportURLs = (imageIds: string[]): string[] => {
    let urls: string[] = [];

    if (imageIds.length > 0) {
        for (let i = 0; i < imageIds.length; i++) {
            let url = getGoogleImageExportURL(imageIds[i]);

            if (url !== "") {
                urls.push(url);
            }
        }
    }

    return urls;
}

// https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/
const decodeHTML = (html: any): string => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    txt.id = 'temporary-textarea'
    var val = txt.value;
    txt.remove();
    return val;
};

const utils = {
    getGoogleImageExportURL,
    getGoogleImageExportURLs,
    decodeHTML
}

export default utils;