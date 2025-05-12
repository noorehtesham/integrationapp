import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    const handleRouteChange = (url) => {
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
