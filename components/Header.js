import Link from 'next/link'
import styles from '../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCartArrowDown,
    faMagnifyingGlass,
    faBell,
    faRightToBracket,
    faGear
} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const Title = () => {
        return (
            <div>
                <Link href="/">
                    <a>My Ecommerce</a>
                </Link>
            </div>
        )
    }

    const Navbar = () => {
        return (
            <nav>
                <form className={styles.find}>
                    <input />
                    <button type='submit'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
                <Link href="#">
                    <a>
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <FontAwesomeIcon icon={faCartArrowDown} />
                    </a>
                </Link>
                <Link href="/config">
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                    </a>
                </Link>
                <Link href="/user/login">
                    <a>
                        <FontAwesomeIcon icon={faRightToBracket}/>
                    </a>
                </Link>
            </nav>
        )
    }

    return (
        <header className={styles.header}>
            <Title />
            <Navbar />
        </header>
    )
}