import DescriptiveTitle from "../Titles/DescriptiveTitle";
import styles from "./LargeButton.module.css";
import iconStyles from "../../Icon/Icon.module.css";
import Icon from "../../Icon/Icon";

// 1. O componente agora recebe props
function LargeButton({ iconName, iconAlt, title }) {
  return (
    <div className={styles.container}>
      {/* 2. As props são usadas para definir o ícone */}
      <Icon name={iconName} alt={iconAlt} className={iconStyles.person} />
      <div className={styles.footer}>
        {/* 3. A prop 'title' é usada para o texto */}
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