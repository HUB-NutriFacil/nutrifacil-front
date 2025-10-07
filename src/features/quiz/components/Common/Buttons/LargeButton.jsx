import DescriptiveTitle from "../Titles/DescriptiveTitle";
import styles from "./LargeButton.module.css";
import iconStyles from "../../Ui/Icon/Icon.module.css";
import ImageComponent from "../../Ui/Images/ImageComponent"
import Icon from "../../Ui/Icon/Icon";

// 1. O componente agora recebe a prop 'onClick' junto com as outras
function LargeButton({ imageName, iconAlt, title, onClick }) {
  return (
    // 2. A prop 'onClick' é aplicada diretamente na div principal,
    // tornando todo o container clicável.
    <div className={styles.container} onClick={onClick}>
      <ImageComponent name={iconName} alt={imageAlt} className={iconStyles.person} />
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