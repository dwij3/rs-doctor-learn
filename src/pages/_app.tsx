import "@/styles/globals.css";
import '../styles/calculator.mod.css'; // Move the global CSS import here

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
