import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShield,
    faCreditCard,
    faGlobe
} from '@fortawesome/free-solid-svg-icons'

export const products = [
        {
            id: 1,
        title: "Borussia Dortmund",
        price: 7500,
        img: "/dortmund_shirt.jpg"
        },
        {
            id: 2,
        title: "River Plate",
        price: 4500,
        img: "/river_shirt.jpg"
        },
        {
            id: 3,
        title: "Bayern Munich",
        price: 6500,
        img: "/bayern_shirt.jpg"
        },
        {
            id: 4,
        title: "Manchester United",
        price: 7000,
        img: "/united_shirt.jpg"
        }
    ]

        export const info = [
            {
                icon: <FontAwesomeIcon icon={faCreditCard}/>,
            title: "Aceptamos diferentes metodos de pago",
            description: "Desde Mercado Pago, tarjetas de credito y débito, hasta stripe para pagos internacionales"
            },
            {
                icon: <FontAwesomeIcon icon={faGlobe}/>,
            title: "Entregas en todo el mundo",
            description: "Hasta 1 semana de espera para tener tu producto en la puerta de tu casa y gratis desde AR$5500"
            },
            {
                icon: <FontAwesomeIcon icon={faShield} />,
            title: "Seguridad en todo el camino",
            description: "Brindamos un control de calidad de alto nivel para que todos tus envios sean los que pedister"
            }
        ]

        export const categories = [
            "Sudamerica",
            "Europa",
            "Alemania",
            "Inglaterra",
            "España",
            "Argentina"
        ]

export const alerts = []