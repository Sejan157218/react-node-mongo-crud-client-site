import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const {id} =useParams();
    const [user,setUser] = useState({})
    useEffect(()=>{
        const url = `http://localhost:9000/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    console.log(id);
    return (
        <div>
            <h2>Update User</h2>
            <h5> {user.name} --{user.email}</h5>
        </div>
    );
};

export default UpdateUser;