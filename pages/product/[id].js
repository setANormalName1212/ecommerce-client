import { useRouter } from 'next/router'
import Image from 'next/image'

// styles
import styles from '../../styles/product.module.css'

import Container from '../../components/Container'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCartArrowDown,
} from '@fortawesome/free-solid-svg-icons'

// data
import { products } from '../../components/data'

export default function Product() {
    const router = useRouter()
    const { id } = router.query
    
    let product = products.find(product => product.id == id)

    return (
        <Container>
            <article className={styles.product}>
                <Image
                src={product?.img}
                width={225}
                height={225}
                className={styles.img}
                />
                <h3>{product?.title}</h3>
                <div>
                    <h3>${product?.price}</h3>
                    <FontAwesomeIcon 
                    icon={faCartArrowDown}
                    />
                </div>
            </article>
        </Container>
    )
}