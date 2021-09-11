import Head from "next/head";

/* Components */
import Hero from "/components/Hero";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col min-h-screen">
      <Head>
        <title>Michael Roudnitski</title>
        <link rel="icon" href="/mroudnitski.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Software Engineer Intern @ IBM | Computer Science @ York University"
        />
        <meta
          name="keywords"
          content="michael roudnitski,roudnitski,michael,mroudnitski,michaelroudnitski,michaelr,software engineer"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="flex flex-col w-full flex-1">
        <Hero />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        todo
      </footer>
    </div>
  );
}
