import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as JotaiProvider } from "jotai";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <Component {...pageProps} />;
    </JotaiProvider>
  );
}
