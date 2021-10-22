import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handlerToDelete = id => {
        const procced = window.confirm('are you sure to delete this')
        if (procced) {
            const url = `http://localhost:9000/users/${id}`;
            fetch(url, {
                method: "DELETE",
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingUser = users.filter(user => user._id !== id);
                        setUsers(remainingUser);
                    }
                })
        }
    }
    return (
        <div>
            <h2>User available : {users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}> {user.name}----- {user.email}
                       <Link to={`/users/update/${user._id}`}><button>update</button></Link> 
                        <button onClick={() => handlerToDelete(user._id)}>x</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;