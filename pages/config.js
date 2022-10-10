import Container from '../components/Container'

// CSS
import styles from '../styles/config.module.css'

export default function Config() {
    return (
        <Container>
            <section className={styles.config}>
                <h2>Configuraciones</h2>
                <form>
                    <label htmlFor="name">
                        Username
                        <input type="text" name="username" placeholder='Username' autoComplete='off'/>
                    </label>
                    

                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" placeholder='Email' autoComplete='off'/>
                    </label>

                    <label htmlFor="password">
                        Password
                        <input type="password" name="password" placeholder='Password'/>
                    </label>
                    
                    <label htmlFor="password2">
                        rewrite password
                        <input type="password" name="password2" placeholder='rewrite password'/>
                    </label>
                    
                    <input type="submit" value="Actualizar"/>
                </form>
            </section>
        </Container>
    )
}