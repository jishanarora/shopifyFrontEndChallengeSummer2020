import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer= styled.aside`
position:fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({hidden})=>(hidden? '0' : '100%')};
top: ${({hidden})=>(hidden ? '-100%' : '0')};
`

export const ClosedIcon=styled(FaTimes)`
color: #fff;
`

export const Icon= styled.div`  
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
`
export const SidebarLink = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover{
    color: #01bf71;
    transition: 0.2 ease-in-out;
}
`
export const SidebarButtonWrap=styled.div`
display: flex;
justify-content: center;
`
export const SidebarRoute=styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 2rem;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`
export const SidebarMenu= styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repear(6,60px);
}
`