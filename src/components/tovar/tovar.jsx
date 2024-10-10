import React from 'react';
import s from './tovar.module.css';
import tovarkart from '../../assets/tovar.png';

export function Tovar() {
    return (
        <div className={s.Tovars}>
            <img src={tovarkart} className={s.imagecart}></img>
            <p className={s.zagalov}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
            <div className={s.nizh}>
            <h3 className={s.tsena}>335 ₽</h3>
            <button className={s.btnkorz}>Добавить в корзину</button>
            </div>
        </div>
    );
}