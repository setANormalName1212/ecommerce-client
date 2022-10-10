import Container from '../../components/Container'

const Form = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            password2: e.target.password2.value
        }

        if(data.password !== data.password2) {
            console.log("Password dont match")
        } else {
            console.log(data)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label
            htmlFor='username'
            >Username:</label>
            <input
            type="text"
            id='username'
            name='username'
            required
            />

            <label
            htmlFor='email'
            >Email:</label>
            <input
            type="email"
            id="email"
            name="email"
            required
            />

            <label
            htmlFor='password'
            >password:</label>
            <input
            type="password"
            minLength="8"
            id="password"
            name="password"
            required
            />

            <label
            htmlFor='password2'
            >Rewrite password:</label>
            <input
            type="password"
            id="password2"
            name="password2"
            minLength="8"
            required
            />

            <button
            type='submit'
            >Submit</button>
        </form>
    )
}

const register = () => {
    return (
        <Container>
            <Form />
        </Container>
    )
}

export default register