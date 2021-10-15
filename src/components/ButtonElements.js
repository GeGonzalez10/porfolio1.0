import styled from "styled-components";
import {Link} from "react-scroll";

export const Button = styled(Link)`
display:flex;
border-radius: 50px;
background: ${({primary}) => (primary ? "#F5F5F5" : "#FC5185")};
white-space: nowrap; 
padding: ${({big}) => (big? "14px 48px" : "12px 30px")};
color: ${({white}) => (white? "#FC5185" : "#F5F5F5")};
font-size: ${({fontBig}) => (fontBig? "20px" : "16px")};
outline: none;
font-weight: bold;
border: none;
justify-content: center;
cursor: pointer;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    color: ${({white}) => (white ? "#FC5185" : "#F5F5F5")};
    background:  ${({primary}) => (primary ? "#FC5185" : "#F5F5F5")};
}
`

export const SquareButton = styled(Button)`
border-radius: 0;
&:hover{
    background: #de1b56;
}
`

export const PinkButton = styled(Button)`
&:hover{
    background: #de1b56;
}
`