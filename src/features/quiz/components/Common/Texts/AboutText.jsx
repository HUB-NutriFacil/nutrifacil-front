import styles from "./AboutText.module.css"

function AboutText({children, variant}){
    const aboutClasses = `${styles.miniAbout} ${variant === 'descriptive' ? styles.descriptive : ''}`;
    return(
        <h4 className={aboutClasses}> {children}</h4>
    )
}

export default AboutText;