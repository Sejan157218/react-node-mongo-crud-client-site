import React, {useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handlerToSubmit = e =>{
        const name=nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = {name,email};
        fetch('http://localhost:9000/users',{
            method:'post',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newUser)
        }).then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('user is added')
                e.target.reset();
            }
        })
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handlerToSubmit}>
                <input ref={nameRef} type="text" name="" id="" />
                <input ref={emailRef} type="email" name="" id="" />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;