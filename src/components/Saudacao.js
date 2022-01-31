import PropTypes from 'prop-types'


function Saudacao({nome}) {  
    
    const saudar = (nome) => `Olá, ${nome}, Tudo bem?`


    return (
        <>
            {nome.length > 1 && (<p> {saudar(nome)} </p>)}
                   
        </>
    )
}

// Saudacao.propTypes = {
//     nome: PropTypes.string
// }

// Saudacao.defaultProps = {
//     nome: "Ninguém",
// }

export default Saudacao