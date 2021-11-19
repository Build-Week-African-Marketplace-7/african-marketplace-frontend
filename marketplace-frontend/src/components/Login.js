import React from 'react';
import { useHistory } from "react-router-dom";
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

    const history = useHistory();
    

return (
    <>  
        <div class="header-categories">
            <header>
            <h1>WELCOME TO AFRICAN MARKETPLACE</h1>
            </header>
        </div>
        <div>
            <h2> Login Here </h2>
        </div>
        <section class="form-box">
            
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
                placeholder = "Enter your password"
                value ={props.values.password}
                name= "password"
                onChange ={handleChange}
            />
            </label>
        
            <section class="form-button">
                <div class ='submit'>
                    <button disabled = {!props.values.username || !props.values.password} onClick={() => history.push('/categories')}> Login </button>
                </div>
            </section>
            </form>
        </section> 
        
    </>
)

}
export default Login;