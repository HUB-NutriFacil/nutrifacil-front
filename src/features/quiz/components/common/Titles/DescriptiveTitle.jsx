import styles from "./DescriptiveTitle.module.css";

function DescriptiveTitle({ children }) {
  return <h3 className={styles.descriptive}> {children} </h3>;
}

export default DescriptiveTitle;
