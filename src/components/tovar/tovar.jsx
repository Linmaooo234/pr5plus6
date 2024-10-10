import React from 'react';
import s from './tovar.module.css';
import tovarkart from '../../assets/tovar.png';

export function Tovar({ title, price, image }) {
    return (
        <div className={s.Tovars}>
            <img src={image} className={s.imagecart}></img>
            <p className={s.zagalov}>{title}</p>
            <div className={s.nizh}>
            <h3 className={s.tsena}>{price}</h3>
            <button className={s.btnkorz}>Добавить в корзину</button>
            </div>
        </div>
    );
}