const SUMMARY_MIN = 90;
const SUMMARY_MAX = 180;
const MIN_TAGS = 3;
const TAG_MIN = 2;
const TAG_MAX = 70;

function asString(value) {
    return typeof value === 'string' && value.trim().length > 0 ? value.trim() : null;
}

function asDateString(value) {
    const asText = asString(value);
    if (!asText) return null;
    const parsed = new Date(asText);
    return Number.isNaN(parsed.getTime()) ? null : asText;
}

function asStringArray(value) {
    if (!Array.isArray(value)) return [];
    return value.filter((x) => typeof x === 'string').map((x) => x.trim()).filter(Boolean);
}

function validateRecentPostsSeo(posts) {
    if (!Array.isArray(posts)) {
        return ['recent posts payload must be an array'];
    }

    const errors = [];
    const slugs = new Set();

    posts.forEach((post, index) => {
        const prefix = `post[${index}]`;
        const slug = asString(post.slug);
        const title = asString(post.title);
        const summary = asString(post.summary);
        const date = asDateString(post.date);
        const tags = asStringArray(post.tags);

        if (!slug) errors.push(`${prefix}: missing slug`);
        if (slug && slugs.has(slug)) errors.push(`${prefix}: duplicate slug \"${slug}\"`);
        if (slug) slugs.add(slug);

        if (!title) errors.push(`${prefix}: missing title`);
        if (!summary) errors.push(`${prefix}: missing summary`);
        if (summary && (summary.length < SUMMARY_MIN || summary.length > SUMMARY_MAX)) {
            errors.push(`${prefix}: summary length ${summary.length} outside ${SUMMARY_MIN}-${SUMMARY_MAX}`);
        }

        if (!date) errors.push(`${prefix}: missing or invalid date`);

        if (tags.length < MIN_TAGS) {
            errors.push(`${prefix}: tags count ${tags.length} < ${MIN_TAGS}`);
        }

        tags.forEach((tag, tagIndex) => {
            if (tag.length < TAG_MIN || tag.length > TAG_MAX) {
                errors.push(`${prefix}: tags[${tagIndex}] length ${tag.length} outside ${TAG_MIN}-${TAG_MAX}: \"${tag}\"`);
            }
        });

        const normalized = tags.map((tag) => tag.toLowerCase());
        const dupes = normalized.filter((tag, i) => normalized.indexOf(tag) !== i);
        if (dupes.length > 0) {
            errors.push(`${prefix}: duplicate tags: ${Array.from(new Set(dupes)).join(', ')}`);
        }
    });

    return errors;
}

module.exports = {
    validateRecentPostsSeo,
};