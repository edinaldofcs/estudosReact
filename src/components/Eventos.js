
import styles from './Eventos.module.css'
import { useState } from 'react';

export default function Eventos(){
    
    const [valor, setValor] = useState('');

    const alerta = (e)=> {
        e.preventDefault();
        alert(valor);
        setValor('');
    }       

    return(
        <div className={styles.div}>
            <form onSubmit={alerta}>
                <input onChange={(e)=>setValor(e.target.value)} type={"text"} placeholder='insira o seu nome' className={styles.input} />
            <button className={styles.botao}>Clique aqui</button>
            </form>
        </div>
    )

}