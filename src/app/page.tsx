import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Environment: {process.env.NEXT_PUBLIC_ENV}</h1>
        <h2>Feature A</h2>
        <h2>Hotfix</h2>
        <h2>Hotfix 2</h2>
      </main>
    </div>
  );
}
