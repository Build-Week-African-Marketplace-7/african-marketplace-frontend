import React from 'react';
import '../App.css'
import '../index.css'

const Register =(props)=>{

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
            <h2> Register Here </h2>
            </div>
            <form onSubmit = {handleSubmit}>
            <label>Name: 
                <input 
                    placeholder ="Enter your name"
                    value = {props.values.name}
                    name ="name"
                    onChange={handleChange}
                />
            </label>
            <label>Email: 
            <input
                placeholder = "Enter your email"
                value ={props.values.email}
                name= "email"
                onChange ={handleChange}
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
                <button disabled = {!props.values.name || !props.values.email || !props.values.password}> Register </button>
            </div>
            </form>
        </div>
    </>
)

}
export default Register;