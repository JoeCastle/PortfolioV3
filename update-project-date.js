const fs = require('fs-extra');
const xml2js = require('xml2js');
const path = require('path');

// Function to update the lastmod date in sitemap.xml
const updateSitemap = async () => {
    try {
        // Read sitemap.xml
        const filePath = path.join(__dirname, 'public', 'sitemap.xml'); // Adjust the path as needed
        const fileContent = await fs.readFile(filePath, 'utf-8');

        // Parse the XML content
        const parser = new xml2js.Parser({ explicitArray: false });
        const parsedSitemap = await parser.parseStringPromise(fileContent);

        // Update the date in the parsed XML to "YYYY-MM-DD" format
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        parsedSitemap.urlset.url.lastmod = formattedDate;

        // Convert the parsed XML back to string
        const builder = new xml2js.Builder();
        const updatedSitemap = builder.buildObject(parsedSitemap);

        // Write the updated XML back to sitemap.xml
        await fs.writeFile('public/sitemap.xml', updatedSitemap, 'utf-8');
        console.log('Updated sitemap.xml');
    } catch (error) {
        console.error('Error updating sitemap.xml:', error);
    }
};

// Function to update the "REACT_APP_VERSION_DATE" value in .env.local
const updateEnvLocalVersionDate = async () => {
    try {
        const envLocalPath = path.join(__dirname, '.env.local');
        const envLocalContent = await fs.readFile(envLocalPath, 'utf-8');

        // Define the regular expression pattern to match the "REACT_APP_VERSION_DATE" line
        const pattern = /^REACT_APP_VERSION_DATE=(.*)$/m;

        // Replace the "REACT_APP_VERSION_DATE" line with the updated value
        const updatedEnvLocalContent = envLocalContent.replace(pattern, `REACT_APP_VERSION_DATE=${Date.now().toString()}`);

        // Write the updated content back to .env.local
        await fs.writeFile(envLocalPath, updatedEnvLocalContent, 'utf-8');
        console.log('Updated .env.local REACT_APP_VERSION_DATE.');
    } catch (error) {
        console.error('Error updating .env.local REACT_APP_VERSION_DATE:', error);
    }
};

updateSitemap();
updateEnvLocalVersionDate();
