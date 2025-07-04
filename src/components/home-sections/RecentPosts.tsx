import { useEffect, useRef, useState } from 'react';
import backupPosts from '../../data/recent-posts-backup.json';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';

interface RecentPost {
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags?: string[];
}

interface Props { }

/**
 * The blog section on the homepage.
 * @param props
 * @returns
 */
export const RecentPosts: React.FC<Props> = (props) => {
    const [posts, setPosts] = useState<RecentPost[]>(backupPosts as RecentPost[]);
    const [loading, setLoading] = useState<boolean>(true);

    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    useEffect(() => {
        // Load the latest blog post data from the recent-posts.json hosted on the blog.
        // The local project file is used by default. (backupPosts)
        // Then in the background we attempt to load the data from the blog.
        // If we don't need to, then just refer to the cached data.
        // Otherwise load the latest data from the blog.
        const lastFetchTime: string | null = localStorage.getItem('recentPostsLastFetch');
        const cachedPosts: string | null = localStorage.getItem('recentPostsData');
        const timeDelay: number = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
        const shouldFetch: boolean = !lastFetchTime || (Date.now() - parseInt(lastFetchTime)) > timeDelay;

        // If we have cached data, use it first.
        if (cachedPosts && lastFetchTime) {
            try {
                const parsedPosts = JSON.parse(cachedPosts);
                setPosts(parsedPosts);
                setLoading(false);
            } catch (error) {
                // If parsing fails, fall back to backup.
                setPosts(backupPosts as RecentPost[]);
                setLoading(false);
            }
        } else {
            // No cached data, use backup by default.
            setLoading(false);
        }

        if (shouldFetch) {
            setLoading(true);
            fetch('https://blog.joecastle.co.uk/recent-posts.json')
                .then((res) => {
                    if (!res.ok) throw new Error('Failed to fetch recent posts');
                    return res.json();
                })
                .then((data) => {
                    setPosts(data);
                    localStorage.setItem('recentPostsLastFetch', Date.now().toString());
                    localStorage.setItem('recentPostsData', JSON.stringify(data));
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        }
    }, []);

    return (
        <div className="recent-posts-container section recent-posts" id="Blog">
            <div className="content-container" id={`${PageSectionIdType.Blog}`} ref={ref}>
                <div className="section-title-wrapper">
                    <h2>Blog</h2>
                </div>
                {loading && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
                        <i className="fas fa-spinner fa-spin" style={{ fontSize: 20 }} aria-label="Loading new posts" />
                    </div>
                )}
                <ul className="recent-posts-list">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <a href={`https://blog.joecastle.co.uk/blog/${post.slug}?utm_source=portfolio&utm_medium=recent-posts-list`} target="_blank" rel="noopener noreferrer">
                                <h3>{post.title}</h3>
                            </a>
                            <p>{post.summary}</p>
                            <small>{new Date(post.date).toLocaleDateString()}</small>
                        </li>
                    ))}
                </ul>
                <div className="blog-link-btn-container">
                    <a
                        className="blog-link-btn"
                        href="https://blog.joecastle.co.uk/?utm_source=portfolio&utm_medium=homepage-section"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit the Blog
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RecentPosts;