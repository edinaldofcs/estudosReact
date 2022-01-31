import styles from './Itens.module.css'
import PropTypes from 'prop-types'

function Itens({marca, lancamento}){
    return(
        <>
            <li className={styles.li}>{marca} : {lancamento}</li>
        </>

    )
}

Itens.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number
}

Itens.defaultProps = {
    marca: "Campo em branco",
    lancamento: new Date().getFullYear()
}

export default Itens