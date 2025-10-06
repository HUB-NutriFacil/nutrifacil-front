import DescriptiveTitle from "../Titles/DescriptiveTitle";
import styles from "./LargeButton.module.css";
import iconStyles from "../../Icon/Icon.module.css";
import Icon from "../../Icon/Icon";

// 1. O componente agora recebe a prop 'onClick' junto com as outras
function LargeButton({ iconName, iconAlt, title, onClick }) {
  return (
    // 2. A prop 'onClick' é aplicada diretamente na div principal,
    // tornando todo o container clicável.
    <div className={styles.container} onClick={onClick}>
      <Icon name={iconName} alt={iconAlt} className={iconStyles.person} />
      <div className={styles.footer}>
        <DescriptiveTitle>{title}</DescriptiveTitle>
        <Icon
          name="arrow"
          alt="Setinha para a direita"
          className={iconStyles.arrow}
        />
      </div>
    </div>
  );
}

export default LargeButton;