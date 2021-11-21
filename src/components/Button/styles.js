import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background:${props => props.isBack ? 'rgba(255, 255, 255, 0.25);' : 'red'} ;
   
 
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color:#fff;
    border:none;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    
     margin-top:76px; 
    &:hover{
        opacity:0.8;
    }
    &:active{
        opacity:0.5;
    }
    img{
        transform:${props => props.isBack && 'rotateY(180deg)'} 
    }
`