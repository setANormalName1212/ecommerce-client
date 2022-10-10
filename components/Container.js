import Footer from "./Footer"
import Header from "./Header"

import styles from '../styles/container.module.css'

export default function Container({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                { children }
            </main>
            <Footer />
        </div>
    )
}