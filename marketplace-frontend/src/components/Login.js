import React from 'react';
import '../App.css'
import '../index.css'

const Login =(props)=>{

    const handleChange = event =>{
        const {name, value} = event.target;
        props.change(name, value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.submit();
    }

    

return (
    <>  
        <div className="header-categories">
            <header>
            <h1>WELCOME TO AFRICAN MARKETPLACE</h1>
            </header>
        </div>

        <div classname="form-box">
            <div>
            <h2> Login Here </h2>
            </div>
            <form onSubmit = {handleSubmit}>
            <label>Username: 
                <input 
                    placeholder ="Enter your username"
                    value = {props.values.username}
                    name ="username"
                    onChange={handleChange}
                />
            </label>
            <label>Password: 
            <input
                placeholder = "Enter a password"
                value ={props.values.password}
                name= "password"
                onChange ={handleChange}
            />
            </label>
           
            <div className ='submit'>
                <button disabled = {!props.values.username || !props.values.password}> Login </button>
            </div>
            </form>
        </div>
    </>
)

}
export default Login;