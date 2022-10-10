import styles from '../styles/Index.module.css'
import Image from 'next/image'
import Link from 'next/link'

// Container
import Container from '../components/Container'

// data
import { info } from '../components/data'
import { products } from '../components/data'
import { categories } from '../components/data'

const Products = () => {
  return (
    <section className={styles.products}>
      {
        products.map(product => (
          <Link href={`/product/${product.id}`}  key={product.id}>
            <article>
            <Image
            src={product.img}
            width={150}
            height={150}
            />
            <div>
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          </article>
          </Link>
        ))
      }
    </section>
  )
}

const Info = () => {
  return (
    <section className={styles.info}>
      {
        info.map(res => (
          <article key={res.title}>
            {res.icon}
            <h3>{res.title}</h3>
            <p>{res.description}</p>
          </article>
        ))
      }
    </section>
  )
}

const Categories = () => {
  return (
    <section className={styles.categories}>
      <h2>Ve nuestras más solicitadas categorias</h2>
      <div>
        {
          categories.map(category => (
            <article key={category}>
              <h3>{category}</h3>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <Container>

      <Products />
      
      <Categories />
      
      <Info />

    </Container>
  )
}