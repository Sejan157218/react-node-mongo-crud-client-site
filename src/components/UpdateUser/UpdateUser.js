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
    const userUpdateName = e =>{
        const userName = e.target.value;
        const updateUser = {name :userName,email:user.email };
        setUser(updateUser);
    }

    const userUpdateEmail= e=>{
        const userEmail = e.target.value;
        const updateEmail = {...user};
        updateEmail.email = userEmail;
        setUser(updateEmail);
    }

    const handlerToSubmit=e=>{
        const url = `http://localhost:9000/users/${id}`;
        fetch(url,{
            method:'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body :JSON.stringify(user)

        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('update succeed.');
                setUser({});
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Update User</h2>
            <h5> {user.name} --{user.email}</h5>
            <form onSubmit={handlerToSubmit}>
                <input onChange={userUpdateName} type="text" value={user.name || ''}/>
                <input  onChange={userUpdateEmail} type="text" value={user.email || ''} type="email" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateUser;