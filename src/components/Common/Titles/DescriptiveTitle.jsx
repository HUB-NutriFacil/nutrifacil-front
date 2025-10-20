// src/components/common/Titles/DescriptiveTitle.jsx
import styles from "./DescriptiveTitle.module.css";

// Receba a prop "className" junto com "children"
function DescriptiveTitle({ children, className,variant }) {
  // Combine a classe padrão do componente com a classe recebida
  const combinedClassName = `${styles.descriptive} ${className || ''}  ${variant === 'titles' ? styles.titles : ''}`;

  return <h3 className={combinedClassName}> {children} </h3>;
}

export default DescriptiveTitle;