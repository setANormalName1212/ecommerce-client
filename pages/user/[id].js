import Container from '../../components/Container'

import { useRouter } from 'next/router'

export default function user() {
    const router = useRouter()
    const { id } = router.query

    return (
        <Container>
            <h2>Hola mundo</h2>
            <p>Post: {id}</p>
        </Container>
    )
}
