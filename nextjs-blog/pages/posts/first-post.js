// Import Next.js components for head management and routing
import Head from 'next/head';
import Link from 'next/link';

// Import custom layout component and post-specific styles
import Layout from '../../components/layout';
import styles from '/styles/post.module.css';

// First post page component - displays the initial blog post
export default function FirstPost() {
  return (
    // Use Layout component without home prop for post page styling
    <Layout children>
      {/* Set page title for the first post */}
      <Head>
        <title>First Post</title>
      </Head>
      {/* Main content section with post styling */}
      <section className={styles.post}>
        {/* Main heading for the first post */}
        <h1>First Post</h1>
        {/* Post content paragraph */}
        <p>This is a post, very cool. Then we talk some more about something, very intriguing.</p>
      </section>
    </Layout>
  );
}