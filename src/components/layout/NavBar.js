import { Link } from 'react-router-dom'
import Styles from './NavBar.module.css'

function NavBar() {

    return (
        <nav className={Styles.NavBar}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/sobre'>Sobre</Link>
                </li>
                <li>
                    <Link to='/contato'>Contato</Link>
                </li>
            </ul>
            <hr></hr>
        </nav>
    )
}

export default NavBar