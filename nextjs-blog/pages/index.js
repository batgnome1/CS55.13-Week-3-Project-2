// Import Next.js components for head management and routing
import Head from 'next/head';
import Link from 'next/link';

// Import custom layout component and utility styles
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
// Home page component - the main landing page of the website
export default function Home() {
  return (
    // Use Layout component with home prop for home page styling
    <Layout home>
      {/* Set page title using the site title constant */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Main content section with introduction and navigation */}
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
