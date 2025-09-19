// Import Next.js components for head management, image optimization, and routing
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Import CSS modules for component styling
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
 
// Define site author name and title constants
const name = 'Andrew Mayfield';
export const siteTitle = 'Next.js Sample Website';
 
// Layout component that wraps all pages with consistent header and navigation
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* Head component for managing page metadata and SEO */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        {/* Open Graph meta tags for social media sharing */}
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Header section with conditional rendering based on home prop */}
      <header className={styles.header}>
        {home ? (
          // Home page layout: larger profile image and main heading
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          // Non-home page layout: smaller profile image with link and secondary heading
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      {/* Main content area where page content is rendered */}
      <main>{children}</main>
      {/* Back to home link - only shown on non-home pages */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}