import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'request_demo_click',
    });
    console.log("✅ Click event pushed");
  };

  return (
    <>
      <Head>
        <title>Request Demo</title>
      </Head>
      <main>
        <h1>Welcome to the Demo Page</h1>
        <button onClick={handleClick}>Request Demo</button>
        <br />
        <Link href="/about">Go to About</Link>
      </main>
    </>
  );
}
