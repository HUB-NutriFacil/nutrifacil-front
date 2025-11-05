// src/components/Common/Callout/Callout.jsx
import styles from "./Callout.module.css";

function Callout({ children, variant = "default" }) {
  // Define a classe dinamicamente baseada na variant, aplicada ao CONTENT
  
  const containerClass = `
    ${styles.container}
    ${variant === "plan" ? styles.planContainer : ""}
    ${variant === "success" ? styles.successContainer : ""}
    ${variant === "warning" ? styles.warningContainer : ""}
  `;
  
  const contentClass = `
    ${styles.content} 
    ${variant === "plan" ? styles.plan : ""}
    ${variant === "success" ? styles.success : ""}
    ${variant === "warning" ? styles.warning : ""}
  `;

  return (
    <div className={containerClass.trim()}>
      <h3 className={contentClass.trim()}>{children}</h3>
    </div>
  );
}

export default Callout;

