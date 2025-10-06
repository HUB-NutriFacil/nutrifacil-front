import styles from "./DietStep.module.css"

import TitleQuiz from "../Common/Titles/TitleQuiz"
import DescriptiveButton from "../Common/Buttons/DescriptionButton"

function DietStep(){
    return(
        <div className={styles.container}>
            <TitleQuiz variant="capitalize">Qual tipo de dieta você prefere?</TitleQuiz>
            <DescriptiveButton/>
        </div>
    )
}

export default DietStep