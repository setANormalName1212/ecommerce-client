import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXmark
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <FontAwesomeIcon icon={faXmark} />
            <h2>Esta es solo una página para el portfolio personal de FF, NO esta permitido y no me haré responsable de las compras que se intenten hacer aquí</h2>
        </footer>
    )
}