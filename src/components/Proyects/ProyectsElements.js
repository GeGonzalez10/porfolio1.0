import styled from 'styled-components';
import { Colors } from '../styled.colors';
import {Heading} from '../AboutMe/AboutElements'

let { white} = Colors;

export const ProyectsDiv = styled.div`
background: rgb(54,79,107);
background: linear-gradient(0deg, rgba(54,79,107,1) 0%, rgba(255,255,255,1) 80%);
`

export const ProyectsWrap = styled.div`
display:column; 
z-index:1;
height: 100%;
width: 100%;
justify-content: center;
max-width: 1400px;
margin-right: auto;
margin-left: auto;
padding:0 20px;

media screen and (max-widh: 768px){
    padding: 150px 24px 0px 24px;
}
@media screen and (max-width: 480px){
    padding: 180px 24px 0px 24px;
}
@media (max-width: 991.98px) {
    padding: 200px 24px 0px 24px;
}
`

export const ProyectsContainer = styled.div`
display: flex;
padding: 15px;
column-gap: 20px;
flex-wrap:wrap;
row-gap: 20px;
justify-content: center;
grid-column: 1/-1;

`

export const CardResponsive = styled.div`
display:flex;

flex-direction: column;
row-gap: 10px;
background-color: transparent;

@media screen and (max-widh: 768px){
    display: block;
}

`

export const ImgWrap = styled.div`
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
`

export const Img = styled.img`
width: 330px;
height: 155px;
border-radius: 8px 8px 0px 0px;
max-width: 100%;
object-fit: cover;
`

export const PrWrap = styled.div`
background-color: ${white};
flex-direction: row;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius:0px 0px 10px 10px;
align-items: center;
justify-content: space-between;
padding: 5px;
`

export const expWrap = styled.div`
flex-direction: column; 
row-gap:5px;
`

export const PrTextWrap = styled.div`
flex-direction: row;
`

export const PrText = styled.div`
column-gap: 10px;
align-items: center;
`

export const Skills = styled.div`
font-size: 22px;
align-items: center;
padding: 0 0 0 15px;
column-gap: 5px;
`

export const H5 = styled.h5`
font-size: 12px;
color: black;
`
export const H = styled(Heading)`
padding-left: 24px;
margin-right: auto;
margin-left: auto;
max-width: 1100px;

`