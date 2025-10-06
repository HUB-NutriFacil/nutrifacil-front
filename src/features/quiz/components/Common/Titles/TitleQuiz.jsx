import styles from './TitleQuiz.module.css'

// 1. Receba a nova prop 'variant' junto com 'children'
function TitleQuiz({ children, variant }) {
    
    // 2. Crie a lógica para montar a string de classes CSS
    // A classe .title será aplicada sempre.
    // Se a variant for 'capitalize', a classe .capitalize também será adicionada.
    const titleClasses = `${styles.title} ${variant === 'capitalize' ? styles.capitalize : ''}`;

    return(
        // 3. Use a nova variável de classes no seu h2
        <h2 className={titleClasses}>{children}</h2>
    )
}

export default TitleQuiz