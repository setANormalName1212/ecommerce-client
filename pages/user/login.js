import Container from "../../components/Container"
import Link from "next/link"

const Form = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            email: e.target.first.value,
            password: e.target.last.value
        }

        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email"
            id="email"
            name="email"
            required />

            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            name="password"
            required />

            <button type="submit">Submit</button>
        </form>
    )
}

const Login = () => {
    return (
        <Container>
            <Form />
            <Link href="/user/register">
                Dont have an account... register then
            </Link>
        </Container>
    )
}

export default Login