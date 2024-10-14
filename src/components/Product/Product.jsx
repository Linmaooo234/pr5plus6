import { useParams } from 'react-router-dom';
import s from './Product.module.css';

const products = [
    {
        id: 1,
        title: 'Товар 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 100,
        image: 'https://i.pinimg.com/736x/ad/25/87/ad258754f296a9747762246eb4645e4d.jpg'
    },

    {
        id: 2,
        title: 'Товар 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 200,
        image: 'https://i.pinimg.com/736x/6e/3d/24/6e3d241dd209fd717fcf1073833e9f58.jpg'
    },
    {
        id: 3,
        title: 'Товар 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 300,
        image: 'https://i.pinimg.com/736x/40/c7/59/40c7594ae0419aa5c081e103c79a02cc.jpg'
    },
    {
        id: 4,
        title: 'Товар 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 400,
        image: 'https://i.pinimg.com/564x/6e/9f/da/6e9fdaf9cfd08bc08ef6404836d1775b.jpg'
    },

    {
        id: 5,
        title: 'Товар 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 500,
        image: 'https://i.pinimg.com/564x/ef/77/c8/ef77c8f97827561642f24bb824815fa0.jpg'
    },
    {
        id: 6,
        title: 'Товар 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 600,
        image: 'https://i.pinimg.com/736x/78/b4/e8/78b4e80ab221ef5ca7bfb3bb5ab5fc8b.jpg'
    }
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
            <h1 className={s.ProductTitle}>{product.title}</h1>
            <p className={s.ProductDesc}>{product.description}</p>
            <div className={s.btnopis}>
            <h3 className={s.ProductTsena}>{product.price}₽</h3>
            <button className={s.AddKorzin}>Добавить в корзину</button>
            </div>
            </div>
        </div>
    );
}