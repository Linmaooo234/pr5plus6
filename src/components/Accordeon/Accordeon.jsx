import React, { useState } from 'react';
import s from './Accardeon.module.css'

export function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.accordion_item}>
            <div className={s.accordion_header} onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className={s.accordion_content}>
                    {children}
                </div>
            )}
        </div>
    );
}

export function Accordion() {
    return (
        <div className={s.accordion}>
            <AccordionItem title="Анекдот 1">
                <p>— Что сделает еврей, если ему приснится что он обедает в ресторане?
                — Попытается поскорее проснуться, пока не принесли счет.</p>
            </AccordionItem>
            <AccordionItem title="Анекдот 2">
                <p>Вопрос еврейскому радио:
                — Как правильно рисковать при игре на бирже?
                — Рискуйте не на свои…</p>
            </AccordionItem>
            <AccordionItem title="Анекдот 3">
                <p>В американском посольстве:
                — Дайте визу в Израиль!
                — Но это американское посольство!
                — Черт с вами, антисемиты, давайте в Америку!</p>
            </AccordionItem>
        </div>
    );
}