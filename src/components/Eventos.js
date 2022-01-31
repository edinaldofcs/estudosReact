
import styles from './Eventos.module.css'
import React from 'react';

export default function Eventos(){
    
    const [valor, setValor] = React.useState('');

    const alerta = (e)=> {
        e.preventDefault();
        alert(valor);
        setValor('');
    }    

    function inserir(e){
        const val = e.target.value
        setValor(val);   
    }

    return(
        <div className={styles.div}>
            <form onSubmit={alerta}>
                <input onChange={inserir} type={"text"} placeholder='insira o seu nome' className={styles.input} />
            <button className={styles.botao}>Clique aqui</button>
            </form>
        </div>
    )

}