import styles from './Eventos.module.css'
import { useState } from 'react';
import Button from './Button';

export default function Eventos(){   

    const teste = ()=> {
        alert('evento passado por props');
    }      
    
    const teste2 = ()=> {
        alert('Passando segundo evento por props');
    }  

    return(
        <div className={styles.div}>
            <h1>clique para disparar um evento</h1>
            <Button text="Evento numero 1" event={teste}></Button> 
            <Button text="Evento numero 2" event={teste2}></Button> 
        </div>
    )

}