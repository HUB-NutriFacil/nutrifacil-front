import styles from './HeaderQuiz.module.css'
import Icon from './Icon/Icon'

 function HeaderQuiz() {
  return(
    <div className={styles.container}> 
    <Icon name="logo" alt="Logo escrito NutriFácil" className={styles.logo}/>
    </div>
  )
}
 
export default HeaderQuiz 
 

 