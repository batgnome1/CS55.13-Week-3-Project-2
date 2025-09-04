import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Script from 'next/script';
 
export default function FirstPost() {
  return (
    <>
      <Head>
        {/* Page title for the first post */}
        <title>First Post</title>
      </Head>

      {/* Main heading for the first post */}
      <h1>First Post</h1>
      {/* Navigation link back to home page */}
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}