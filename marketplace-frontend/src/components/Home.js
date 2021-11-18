import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../App.css'
import '../index.css'


const Div = styled.div`
    display:flex;
    flex-direction:column;
    font-family: Arial, Helvetica, sans-serif;
    padding:9.3%;
    align-items: center;
    justify-content: center;

`
const Button = styled.button`
     border: outset white;
     margin-top:30px;
     margin-bottom: 30px;
     border-radius: 2.7%;
     font-size:30px;
     text-align: center;
     background-color: white;
     font-family:Arial, Helvetica, sans-serif;
     font-weight:bold;
     
`


export default function Home() {

    return (
        <Div>
            <h1>AFRICAN MARKETPLACE</h1>
            <Link id="enter-site" to="/about">
                <Button id="enter-site-button" type="button" name="Enter"> Enter </Button>
            </Link>
        </Div>

    )
}
