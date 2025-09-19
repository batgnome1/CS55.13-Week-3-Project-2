// Import global CSS styles that apply to all pages
import '../styles/global.css';

// Custom App component that wraps all pages in the application
// This is the top-level component that Next.js uses to initialize pages
export default function App({ Component, pageProps }) {
  // Render the current page component with its props
  return <Component {...pageProps} />;
}