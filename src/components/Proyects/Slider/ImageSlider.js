import React, {useState} from 'react'

import {Img, SliderContainer, ArrowLeft, ArrowRight, ImgContent} from './SliderElements';
import { SliderData } from './SliderData';

export const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const lenght = slides.lenght;
    
    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current -1)
    }


    if (!Array.isArray(slides) || slides.lenght <= 0) {return null;}

    return (
        <>
            <SliderContainer>
                <ArrowLeft onClick={prevSlide}/>
                    
                    {SliderData.map((slide, index) => {

                        return (
                            <ImgContent key={index}>
                                {index === current && (<Img src={slide.img} alt='prueba' /> )}
                            </ImgContent>
                        )

                    })}
                <ArrowRight onClick={nextSlide}/>

            </SliderContainer>
        </>
        );
};

export default ImageSlider;
