import Styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {

    return (
        <footer className={Styles.footer}>
            <FaFacebook className={Styles.icone}/>
            <FaInstagram className={Styles.icone}/>
            <FaLinkedin className={Styles.icone}/>
            <p>Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer