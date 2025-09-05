import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

 
export default function FirstPost() {
  return (
    <Layout children>
      <Head>
        {/* Page title for the first post */}
        <title>First Post</title>
      </Head>

      {/* Main heading for the first post */}
      <h1>First Post</h1>

    </Layout>
  );
}