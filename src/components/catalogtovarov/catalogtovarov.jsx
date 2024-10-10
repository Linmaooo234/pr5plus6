import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'

const products = [
    {
        title: 'Товар 1',
        price: 100,
        image: 'https://i.pinimg.com/736x/ad/25/87/ad258754f296a9747762246eb4645e4d.jpg'
    },

    {
        title: 'Товар 2',
        price: 200,
        image: 'https://i.pinimg.com/736x/6e/3d/24/6e3d241dd209fd717fcf1073833e9f58.jpg'
    },
    {
        title: 'Товар 3',
        price: 300,
        image: 'https://i.pinimg.com/736x/40/c7/59/40c7594ae0419aa5c081e103c79a02cc.jpg'
    },
    {
        title: 'Товар 4',
        price: 400,
        image: 'https://i.pinimg.com/564x/6e/9f/da/6e9fdaf9cfd08bc08ef6404836d1775b.jpg'
    },

    {
        title: 'Товар 5',
        price: 500,
        image: 'https://i.pinimg.com/564x/ef/77/c8/ef77c8f97827561642f24bb824815fa0.jpg'
    },
    {
        title: 'Товар 6',
        price: 600,
        image: 'https://i.pinimg.com/736x/78/b4/e8/78b4e80ab221ef5ca7bfb3bb5ab5fc8b.jpg'
    }
    
];


export function Catalogtovarov(){
    return(
        <div className={s.catalogszag}>
             <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.catalogs}>
            <div className={s.catalog}>
            {products.map((product, index) => (
                <Tovar 
                    key={index}
                    title={product.title} 
                    price={product.price} 
                    image={product.image} 
                />
            ))}
            </div>
            
        </div>
        </div>
    )
}