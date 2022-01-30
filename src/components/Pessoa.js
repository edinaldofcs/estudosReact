

export default function Pessoa(props){
                     // Pessoa({nome}}) destructuring assignment
    const animal = props.dados
    const {foto, nome, idade, velocidadeMaxima} = props.dados;

    return(
        <>
            <img src={foto}  alt="foto" width="250px" />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {velocidadeMaxima}</p>
            <h2>Nome: {animal.nome}</h2>
            {/* <p>Profissão: {nome}</p> */}
        </>
    )

}