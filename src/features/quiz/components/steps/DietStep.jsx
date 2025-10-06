import styles from "./DietStep.module.css"

import TitleQuiz from "../common/Titles/TitleQuiz"

function DietStep(){
    return(
        <div className={styles.container}>
            <TitleQuiz variant="capitalize">Qual tipo de dieta você prefere?</TitleQuiz>

        </div>
    )
}

export default DietStep