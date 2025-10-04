import styles from './Callout.module.css'



function Callout({children}){
    return(
        <div className={styles.container}>
            <h3 className={styles.content}>{children} </h3>
        </div>
    )


}

export default Callout