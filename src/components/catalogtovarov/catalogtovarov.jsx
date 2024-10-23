import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Товар 1',
        price: 100,
        image: 'https://i.pinimg.com/736x/ad/25/87/ad258754f296a9747762246eb4645e4d.jpg'
    },

    {
        id: 2,
        title: 'Товар 2',
        price: 200,
        image: 'https://i.pinimg.com/736x/6e/3d/24/6e3d241dd209fd717fcf1073833e9f58.jpg'
    },
    {
        id: 3,
        title: 'Товар 3',
        price: 300,
        image: 'https://i.pinimg.com/736x/40/c7/59/40c7594ae0419aa5c081e103c79a02cc.jpg'
    },
    {
        id: 4,
        title: 'Товар 4',
        price: 400,
        image: 'https://i.pinimg.com/564x/6e/9f/da/6e9fdaf9cfd08bc08ef6404836d1775b.jpg'
    },

    {
        id: 5,
        title: 'Товар 5',
        price: 500,
        image: 'https://i.pinimg.com/564x/ef/77/c8/ef77c8f97827561642f24bb824815fa0.jpg'
    },
    {
        id: 6,
        title: 'Товар 6',
        price: 600,
        image: 'https://i.pinimg.com/736x/78/b4/e8/78b4e80ab221ef5ca7bfb3bb5ab5fc8b.jpg'
    }
    
];


export function Catalogtovarov(){
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div className={s.catalogszag}>
             <h1 className={s.Zagolovktov}>Каталог товаров</h1>
             <div className={s.Poiskp}>
        <PoiskTovarov handleChange={handleChange} />
        </div>
        <div className={s.catalogs}>
            <div className={s.catalog}>
                    {filteredProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
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