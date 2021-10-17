import React from 'react'
import { CardResponsive, ProyectsContainer, ImgWrap, Img, PrWrap, expWrap, PrTextWrap, PrText,H, H5, ProyectsWrap, ProyectsDiv, } from './ProyectsElements';

import {TopLine, Heading, Subtitle} from '../AboutMe/AboutElements'
import { ImageSlider } from './Slider/ImageSlider';
import {SliderData} from './Slider/SliderData'

import { proyects } from './ProyectsData';

import img from '../../images/prueba.png'

export const Proyects = () => {
    return (
        <>
        <ProyectsDiv>
            <ProyectsWrap>
                
                <H> Proyectos</H>
                
                <ProyectsContainer>
                {proyects.map(item=>{
                    return (
                        <CardResponsive key={item._id}>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                            <PrWrap>
                                <expWrap>
                                    <Subtitle darkText='true'>{item.title}</Subtitle>
                                    <PrTextWrap>
                                        <PrText><H5>{item.pText}</H5></PrText>
                                    </PrTextWrap>
                                </expWrap>
                            </PrWrap>
                        </CardResponsive>
                    )
                })}
                </ProyectsContainer>

                

            </ProyectsWrap>
        </ProyectsDiv>
        </>
    )
};

export default Proyects
