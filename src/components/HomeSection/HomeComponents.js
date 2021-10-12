import styled from 'styled-components'
import{MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import {Link as LinkScroll} from 'react-scroll'

import {Colors} from '../styled.colors';
let {white, darkBlue, pink, blue} = Colors;

export const HomeContainer = styled.div `
    background: rgb(63,193,201);
    background: linear-gradient(90deg, rgba(63,193,201,1) 1%, rgba(54,79,107,1) 40%, rgba(44,68,94,1) 100%);
    display: flex;
    height: 650px;
    position: relative;
    z-index: 1;
    justify-content: center;
    align-items: center;
    padding: 0 ;

    :before{
        content: '';
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient( 180deg, rgba(0, 0, 0, 0.2)0%, rgba(0, 0, 0, 0.6)100%), 
                    linear-gradient(180deg, rgba(0, 0, 0, 0.2)0%, transparent 100%);
        z-index: 2;
        }
`

export const HomeBg = styled.div`
position: relative;
top: 0;
right:0;
bottom: 0;
left:0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const HomeContent = styled.div`
z-index: 3;
max-width: 1200px;
position:absolute;
padding: 8px 20px;
display: flex;
flex-direction: column;
align-items: center;
`

export const H1 = styled.h1`
color: ${white};
text-shadow: 2px 2px 8px ${darkBlue};
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const P = styled.p`
color: ${white};
text-shadow: 2px 2px 8px ${darkBlue};
font-size: 24px;
font-weight: bold;
max-width: 600px;
margin-top: 24px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 32px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
}
`
export const Pink = styled(P)`
color: ${pink};
margin-top: 0;
`

export const BtnWrapper = styled.div`
margin-top:30px;
display:flex;
flex-direction:row; 
align-items:center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`

export const ReadMoreLink = styled(LinkScroll)`
display:flex;
text-shadow: 2px 2px 8px ${darkBlue};
justify-content:center;
align-items:center;
margin:0px 30px;
font-weight: bold;
transition: 0.2s ease-in-out;
color: ${white};
cursor:pointer;
font-size:16px;
text-decoration:none;
list-style:none;

&:hover{
    color: ${blue};
    transition: 0.2s ease-in-out;
}
`