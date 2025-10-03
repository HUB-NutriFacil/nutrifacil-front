import styles from './TitleQuiz.module.css'

// 1. Adicione { children } para receber o conteúdo passado ao componente
function TitleQuiz({ children }){
    return(
        // 2. Renderize a prop {children} dentro da tag h2
        <h2 className={styles.title}>{children}</h2>
    )
}

export default TitleQuiz