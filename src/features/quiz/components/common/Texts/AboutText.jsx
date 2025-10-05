import styles from "./AboutText.module.css"

function AboutText({children}){
    return(
        <h4 className={styles.miniAbout}> {children}</h4>
    )
}

export default AboutText;