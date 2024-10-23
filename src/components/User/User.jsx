import React, { useState, useEffect } from 'react';
import s from './User.module.css';

export function Users () {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={s.userss}>
            <h1>Список пользователей</h1>
            <input
                type="text"
                placeholder="Поиск по имени"
                value={searchTerm}
                onChange={handleSearchChange}
            />
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <p key={user.id}>
                            {user.name} - {user.email}
                        </p>
                    ))
                ) : (
                    <p>Пользователи не найдены.</p>
                )}
        </div>
    );
};

