import styles from "./AboutText.module.css"

function AboutText({children, variant, onClick}){
    const aboutClasses = `${styles.miniAbout} 
    ${variant === 'descriptive' ? styles.descriptive : ''}
    ${variant === 'dietName' ? styles.dietName : ''}
    ${variant === 'quizRestart' ? styles.quizRestart : ''}
    `;
    return(
        <h4 className={aboutClasses} onClick={onClick} > {children} </h4>
    )
}

export default AboutText;