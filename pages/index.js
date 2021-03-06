import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <a href="https://github.com/SAHARIPRASAD-2907/react-hooks-basic-to-advanced">
              React Hooks
            </a>
          </h1>

          <p className={styles.description}>
            Click on the link to learn more about the hooks{" "}
          </p>

          <div className={styles.grid}>
            <a href="/useStateHook" className={styles.card}>
              <h2>useStateHook &rarr;</h2>
            </a>

            <a href="/useEffectHook" className={styles.card}>
              <h2>useEffectHook &rarr;</h2>
            </a>

            <a href="/useContextHook" className={styles.card}>
              <h2>useContextHook &rarr;</h2>
            </a>
            <a href="/useContextHook" className={styles.card}>
              <h2>useRefHook &rarr;</h2>
            </a>
            <a href="/useContextHook" className={styles.card}>
              <h2>useMemoHook &rarr;</h2>
            </a>
            <a href="/useContextHook" className={styles.card}>
              <h2>useCallbackHook &rarr;</h2>
            </a>
            <a href="/useContextHook" className={styles.card}>
              <h2>useReducerHook &rarr;</h2>
            </a>
            <a href="/useContextHook" className={styles.card}>
              <h2>useTransitionHook &rarr;</h2>
            </a>
            <a href="/useContextHook" className={styles.card}>
              <h2>useDeferredValueHook &rarr;</h2>
            </a>
            <a href="/useLayoutEffectHook" className={styles.card}>
              <h2>useDeferredValueHook &rarr;</h2>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
              href="https://github.com/SAHARIPRASAD-2907"
              target="_blank"
              rel="noopener noreferrer"
          >
            By S A HARIPRASAD{" "}
            <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          </a>
        </footer>
      </div>
  );
}
