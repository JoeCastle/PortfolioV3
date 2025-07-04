const fs = require('fs');
const path = require('path');

const BLOG_URL = 'https://blog.joecastle.co.uk/recent-posts.json';
const OUTPUT_PATH = path.join(__dirname, '../src/data/recent-posts-backup.json');

async function fetchAndSaveRecentPosts() {
  try {
    const res = await fetch(BLOG_URL);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    const data = await res.json();
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2));
    console.log('Recent posts backup updated.');
  } catch (err) {
    console.error('Failed to update recent posts backup:', err.message);
    process.exit(1);
  }
}

fetchAndSaveRecentPosts(); 