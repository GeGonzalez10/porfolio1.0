import React from 'react'

import { CardResponsive, ProyectsContainer, ImgWrap, Img, PrWrap, expWrap, PrTextWrap, PrText,H, H5, Icon, Subtitle, ProyectsWrap, ProyectsDiv, } from './ProyectsElements';


import { proyects } from './ProyectsData';


import CarouselComponent from './Carousel-Img/CarouselComponents';

let {img} = proyects;

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
                                <Img src={item.img}/>
                            </ImgWrap>
                            <PrWrap>
                                <expWrap>
                                    <Subtitle darkText='true'>{item.title} {/* <Icon>{item.icon} {item.icon_2}</Icon> */} </Subtitle>
                                    <PrTextWrap>
                                        
                                        <PrText><H5>{item.pText}</H5></PrText>
                                    </PrTextWrap>
                                </expWrap>
                            </PrWrap>
                        </CardResponsive>
                    )
                })}
                    <CarouselComponent/>
                </ProyectsContainer>     
                {/* <ImageSlider slides={SliderData}/> */}
            </ProyectsWrap>
        </ProyectsDiv>
        </>
    )
};

export default Proyects
