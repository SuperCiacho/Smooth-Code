import Head from "next/head";
import { IconContext } from "components/icon";
import { Header } from "components/header";
import { Navigation } from "components/navigation";
import { ThemeSwitch } from "components/theme-switch";
import styles from "styles/App.module.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={iconStyle}>
      <div className={styles.container}>
        <HyHead />
        <Header>
          <ThemeSwitch />
        </Header>
        <Navigation />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </IconContext.Provider>
  );
}

const HyHead = () => (
  <Head>
    <title>Smooth Code</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest"></link>
  </Head>
);

const iconStyle = {
  style: {
    verticalAlign: "middle",
  }
};

export default MyApp;
