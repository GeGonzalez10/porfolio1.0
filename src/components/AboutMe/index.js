import React from 'react'

import {AboutContainer, AboutWrap, AboutRow, Col1, TextWrapper, TopLine, Subtitle, Heading} from './AboutElements'

export const AboutMe = () => {
    return (
        <>
        <AboutContainer>
            <AboutWrap>
                <AboutRow>
                    <Col1>
                        <TextWrapper>
                            <TopLine>Top Line</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            {/* <BtnWrap to='Home'><Buttom>Buttom</Buttom></BtnWrap> */}
                        </TextWrapper>
                    </Col1>
                </AboutRow>
            </AboutWrap>
        </AboutContainer>  
        </>
    )
}

export default AboutMe;
