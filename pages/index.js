import Head from "next/head";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Компания</title>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Red+Hat+Display:wght@300;400;500&family=Roboto:ital,wght@0,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <Section_1 />
        <Section_2 />
        <Section_3 />
      </main>
    </div>
  );
}
