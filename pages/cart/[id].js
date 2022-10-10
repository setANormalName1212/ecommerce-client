import Container from "../../components/Container"

import { useRouter } from "next/router"

const cartProd = [
    {
        id: "alsd2356",
        title: "Chocolate",
        price: 200,
        qty: 2
    },
    {
        id: "alsd2356",
        title: "Bombones",
        price: 300,
        qty: 1
    },
    {
        id: "alsd2356",
        title: "Chupetines",
        price: 25,
        qty: 10
    },
    {
        id: "alsd2356",
        title: "Chocolate",
        price: 200,
        qty: 2
    },
]

const Cart = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <Container>
            <div>
                {cartProd.map(product => (
                    <div>
                        <h4>{product.title}</h4>
                        
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Cart