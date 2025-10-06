import styles from "./NavigateButton.module.css"

function NavigateButton({children}){
    return(
        <div className={style.container}>
            {children}
        </div>
    )
}

export default NavigateButton