import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '/styles/post.module.css';

 
export default function FirstPost() {
  return (
    <Layout children>
      <Head>
        {/* Page title for the first post */}
        <title>First Post</title>
      </Head>
      <section className={styles.post}>
      {/* Main heading for the first post */}
      <h1>First Post</h1>
      <p>This is a post, very cool. Then we talk some more about something, very intriguing.</p>
      </section>
    </Layout>
  );
}