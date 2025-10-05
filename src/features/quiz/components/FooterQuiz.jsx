import styles from "./FooterQuiz.module.css";

function FooterQuiz({ children }) {
  return (
    <div className={styles.container}>
      <p className={styles.textFooter}>{children}</p>
    </div>
  );
}

export default FooterQuiz;
