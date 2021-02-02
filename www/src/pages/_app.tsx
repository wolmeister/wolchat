import { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wolchat</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
