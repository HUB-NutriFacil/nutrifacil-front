import styles from "./NavigateButton.module.css"

function NavigateButton({children}){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default NavigateButton