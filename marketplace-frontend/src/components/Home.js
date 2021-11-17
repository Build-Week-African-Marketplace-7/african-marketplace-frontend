import React from 'react'
import styled from 'styled-components'
import '../App.css'
const Div = styled.div`
    display:flex;
    font-family: Arial, Helvetica, sans-serif;
    flex-direction: column;
    padding:16%;
    align-items: center;
    justify-content: center;


`
const Button = styled.button`
     border: outset white;
     margin-bottom: 30px;
     border-radius: 2.7%;
     font-size:30px;
     text-align: center;
     background-color: white;
     font-family:Arial, Helvetica, sans-serif;
     font-weight:bold;
     
`
     

export default function Home () {

    return (
        <Div>
            <h1>AFRICAN MARKETPLACE</h1>
           {/* <Link id="enter-site" to="/About">*/}
            <Button> Enter </Button>
        </Div>
    )
}
