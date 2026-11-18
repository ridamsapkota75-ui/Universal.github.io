import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import FloatingFacebookButton from '../src/components/FloatingFacebookButton';

const IndustrialBackground = dynamic(() => import('../src/components/IndustrialBackground'), {
  ssr: false,
});

// Vercel Analytics — loads only when deployed on Vercel; silently skipped otherwise
let AnalyticsComponent: React.ComponentType | null = null;
try {
  const { Analytics } = require('@vercel/analytics/react');
  AnalyticsComponent = Analytics;
} catch {
  AnalyticsComponent = null;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <IndustrialBackground />
      <Component {...pageProps} />
      <FloatingFacebookButton />
      {AnalyticsComponent && <AnalyticsComponent />}
    </>
  );
}

export default MyApp;
