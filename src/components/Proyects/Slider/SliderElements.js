import styled from "styled-components";
import{MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';
import {Colors} from '../../styled.colors'

let {blue} = Colors;

export const Img = styled.img`
width: 700px;
height: 300px;
border-radius: 10px;
`

export const SliderContainer = styled.div`
display:flex;
position: relative;
margin: 90px 0;
height: 30%; 
justify-content: center;
align-items: center;
`

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
color: black;
top: 50%;
right:32px;
position:abolute;
margin: 20px;
font-size: 3rem;
color:#000;
z-index: 10;
cursor:pointer;
user-select: none;
&:hover{
    color: ${blue};
    transition: 0.2s ease-in-out;
}

`

export const ArrowRight = styled(MdKeyboardArrowRight)`
color: black;
top: 50%;
right:32px;
position:abolute;
margin: 20px;
font-size: 3rem;
color:#000;
z-index: 10;
cursor:pointer;
user-select: none;
&:hover{
    color: ${blue};
    transition: 0.2s ease-in-out;
}
`

export const ImgContent = styled.div`
opacity : ${({index, current}) => (index === current ? `1` : `0`)};
transition-duration : ${({index, current}) => (index === current ? `1s` : `1s ease`)};
transform:scale(1.08);
`