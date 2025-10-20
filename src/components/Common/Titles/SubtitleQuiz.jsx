import styles from './SubtitleQuiz.module.css'

function SubtitleQuiz({ children,variant }){
    const titleClasses = `${styles.subtitle} ${variant === 'descriptive' ? styles.descriptive : ''}`;
    return(
        <h3 className={titleClasses}>{children}</h3>
    )
}

export default SubtitleQuiz