import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Set the default theme when the app loads (e.g., 'light' or 'dark')
    document.documentElement.setAttribute("data-theme", "light");

    // Alternatively, you can dynamically choose a theme based on user preferences, e.g.:
    // if (window.localStorage.getItem('theme')) {
    //   document.documentElement.setAttribute("data-theme", window.localStorage.getItem('theme'));
    // } else {
    //   document.documentElement.setAttribute("data-theme", "light"); // default theme
    // }
  }, []);
  return <Component {...pageProps} />;
}
