import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Environment: {process.env.NEXT_PUBLIC_ENV}</h1>
        <h1>Hotfix</h1>
      </main>
    </div>
  );
}
