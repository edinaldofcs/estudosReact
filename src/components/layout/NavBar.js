import { Link } from 'react-router-dom'
import Styles from './NavBar.module.css'

function NavBar() {

    return (
        <div className={Styles.nav_bar}>
            <ul>
                <li>
                    <Link to='/' className={Styles.text}>Home</Link>
                </li>
                <li>
                    <Link to='/sobre' className={Styles.text}>Sobre</Link>
                </li>
                <li>
                    <Link to='/contato' className={Styles.text}>Contato</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar