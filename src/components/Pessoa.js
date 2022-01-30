import styles from './Pessoa.module.css'

export default function Pessoa(props){
                     // Pessoa({nome}}) destructuring assignment
    const animal = props.dados
    const {foto, nome, idade, velocidadeMaxima} = props.dados;

    const img = styles.container_img
    const meuestilo = styles.container_Outros

    return(
        <div className={styles.container}>
            <img src={foto}  alt="foto" width="250px" className={img}/>
            <h2 className={meuestilo}>Nome: {nome}</h2>
            <p className={meuestilo}>Idade: {idade}</p>
            <p className={meuestilo}>Profissão: {velocidadeMaxima}</p>
            <h2 className={meuestilo}>Nome: {animal.nome}</h2>
            {/* <p>Profissão: {nome}</p> */}
        </div>
    )

}