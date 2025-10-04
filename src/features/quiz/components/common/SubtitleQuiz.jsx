import styles from './SubtitleQuiz.module.css'

function SubtitleQuiz({ children }){
    return(
        <h3 className={styles.subtitle}>{children}</h3>
    )
}

export default SubtitleQuiz