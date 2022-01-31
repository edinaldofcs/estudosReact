import styles from './Eventos.module.css'
import Condicional from './Condicional';

export default function Eventos(){   

    return(
        <div className={styles.div}>
            <h1>RENDERIZAÇÃO CONDICIONAL</h1>
            <Condicional />
        </div>
    )

}