
import styles from './Eventos.module.css'

function Button(props){

    return <button className={styles.botao} onClick={props.event}>{props.text}</button>
}

export default Button