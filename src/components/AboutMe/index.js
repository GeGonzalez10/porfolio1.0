import React from 'react'

import {AboutContainer, AboutWrap, AboutRow, Col1, TextWrapper, TopLine, Subtitle, Heading, Img, Col2, ImgWrap} from './AboutElements'
import Image from '../../images/aboutme.svg'

export const AboutMe = ({id, imgStart, topLine,lightText, heading, darkText, description, alt}) => {
    return (
        <>
        <AboutContainer id={id}>
            <AboutWrap>
                <AboutRow imgStart={imgStart}>
                    <Col1>
                        <TextWrapper>
                            <TopLine >{topLine}</TopLine>
                            <Heading lightText={lightText}>{heading}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </Col1>
                    <Col2>
                        <ImgWrap> <Img src={Image} alt={alt}/></ImgWrap>
                    </Col2>
                </AboutRow>
            </AboutWrap>
        </AboutContainer>  
        </>
    )
};

export default AboutMe;
