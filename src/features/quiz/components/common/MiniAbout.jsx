import styles from "./MiniAbout.module.css";

import DescriptiveTitle from "./Titles/DescriptiveTitle";
import VideoAnimation from "../Webm/VideoAnimation";

function MiniAbout() {
  return (
    <div className={styles.conteiner}>
     
    <VideoAnimation name="cellphoneNutrition" />
      <DescriptiveTitle></DescriptiveTitle>
       
    </div>
  );
}

export default MiniAbout;
