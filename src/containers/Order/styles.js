import styled from "styled-components";


export const Container = styled.div`
   background: #0A0A10;
    background-size:cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:40px;
    height:100%;
    min-height:100vh;

`

export const Image = styled.img`
    margin-top:30px;
`

export const User = styled.li`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    margin-top:20px;
    padding:20px;
  
    p{
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color:white;
    }
    h3{
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
    button{
        background:none;
        border:none;
        cursor: pointer;
    }
  
`
export const OrderContainer = styled.div`
  
    display:flex;
    flex-direction:column;
    gap:30px;
    
   
   
`