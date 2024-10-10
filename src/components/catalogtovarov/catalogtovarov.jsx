import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'

export function Catalogtovarov(){
    return(
        <div className={s.catalogszag}>
             <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.catalogs}>
            <div className={s.catalog}>
            <Tovar/>
            <Tovar/>
            <Tovar/>
            <Tovar/>
            <Tovar/>
            <Tovar/>
            </div>
        </div>
        </div>
    )
}