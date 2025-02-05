import { Html, Head, Main, NextScript } from "next/document";

export default function Document({
  children,
}: {
  children: React.ReactNode
})  {

  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        
        <Main />
        {children}
        <NextScript />
      </body>
    </Html>
  );
}
