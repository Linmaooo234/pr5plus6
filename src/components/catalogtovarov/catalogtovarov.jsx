import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Товар 1',
        price: 100,
        image: 'https://i.pinimg.com/736x/ad/25/87/ad258754f296a9747762246eb4645e4d.jpg',
        quantity: 0,
        category: 'Ржака'
    },

    {
        id: 2,
        title: 'Товар 2',
        price: 200,
        image: 'https://i.pinimg.com/736x/6e/3d/24/6e3d241dd209fd717fcf1073833e9f58.jpg',
        quantity: 7,
        category: 'Смешнявка'
    },
    {
        id: 3,
        title: 'Товар 3',
        price: 300,
        image: 'https://i.pinimg.com/736x/40/c7/59/40c7594ae0419aa5c081e103c79a02cc.jpg',
        quantity: 4,
        category: 'Ухахатбл'
    },
    {
        id: 4,
        title: 'Товар 4',
        price: 400,
        image: 'https://i.pinimg.com/564x/6e/9f/da/6e9fdaf9cfd08bc08ef6404836d1775b.jpg',
        quantity: 0,
        category: 'Ржака'
    },

    {
        id: 5,
        title: 'Товар 5',
        price: 500,
        image: 'https://i.pinimg.com/564x/ef/77/c8/ef77c8f97827561642f24bb824815fa0.jpg',
        quantity: 2,
        category: 'Ржака'
    },
    {
        id: 6,
        title: 'Товар 6',
        price: 600,
        image: 'https://i.pinimg.com/736x/78/b4/e8/78b4e80ab221ef5ca7bfb3bb5ab5fc8b.jpg',
        quantity: 5,
        category: 'Смешнявка'
    }
    
];


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Ржака">Ржака</option>
                <option value="Смешнявка">Смешнявка</option>
                <option value="Ухахатбл">Ухахатбл</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}