import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* Personal introduction paragraph */}
        <p>I am Andrew. I like coffee, cats, and spooky things</p>
        {/* Sample website description with Next.js tutorial link */}
        <p>
          <Link href="/posts/first-post">Check out the first post!</Link>
        </p>
      </section>
    </Layout>
  );
}
