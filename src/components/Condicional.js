import { useState } from 'react'
import Styles from './Eventos.module.css'

function Condicional(){
    const [valor, setValor] = useState(true);
    return (
        <>
            {valor ?
            <h1>Primeira renderização</h1>
            :        
            <h1 style={{color:'red'}}>Segunda renderização</h1>
        }
        <button className={Styles.botao} onClick={()=>setValor(!valor)}>clique para mudar renderização</button>
        </>
    )
}

export default Condicional