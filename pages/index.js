import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Frontend Mentor | Tip calculator app</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         SPITTER
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
        </p>

        <div className={styles.grid}>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
