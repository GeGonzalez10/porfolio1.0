import styled from "styled-components";

export const AboutContainer = styled.div`
color: #fff;
backgroung: ${({lightBackground}) => (lightBackground ? "#f9f9f9" : "#010606")};

media screen and (max-widh: 768px){
    padding: 100px 0;
}
`

export const AboutWrap = styled.div`
display:grid; 
z-index:1;
height: 860px;
width: 100%;
justify-content: center;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding:0 24px;
`

export const AboutRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-templates-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};

@media screen and (max-width:768px){
    grid-templates-area: ${({imgStart}) => (imgStart ? `"col1" "col"` : `"col1 col1" "col2 col2"`)};
}
`

export const Col1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Col2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding: 0 0 60px 0;
`

export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height:16px;
font-weight: 700;
letter-spacing: 1.4px;
letter-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? "#f7f8fa" : "010606")};

@media screen and (max-width: 768px){
    font-size: 32px
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) =>(darkText ? "#010606" : "fff")}
`
