
import Itens from './Itens'

export default function Pessoa(){
    

    return(
        <div>
            <h1>Minha lista</h1>
            <ul>
                <Itens marca={'Fiat'}  />
                <Itens marca="ford" lancamento={2022}/>
            </ul>            
            
        </div>
    )

}