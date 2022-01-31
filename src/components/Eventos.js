import styles from './Eventos.module.css'
import RenderListas from './RenderListas';

export default function Eventos(){   

    const item = ['React', 'NextJs', 'Angular', 'Vue'];
    const pessoa = [{nome:"Fulando",idade:28}, {nome:"Ciclano",idade:42}, {nome:"Beltrano",idade:62}];
    
    

    return(
        <div className={styles.div}>
            <h1>RENDERIZAÇÃO CONDICIONAL DE LISTAS</h1>
            <RenderListas pessoas={pessoa} itens={item}/>
            <RenderListas pessoas={[]} itens={item}/>
        </div>
    )

}