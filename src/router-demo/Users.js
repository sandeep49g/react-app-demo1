import React, {useState, useEffect} from 'react'
import UserDetails from './UserDetails.js';

export default function Users() {
    
    const [users, updateUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const usersData = await fetch('https://api.github.com/users');
        const usersInfo = await usersData.json();
        updateUsers(usersInfo);
    }

    return (
        <div>
            <h1>Users</h1>
            <div>
                {
                    users.map(user => (
                        <UserDetails {...user} />
                    ))
                }
            </div>
        </div>
    )
}
