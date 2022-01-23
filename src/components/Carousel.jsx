
import React, {useRef, useState, useEffect} from 'react';
import styled, {css} from 'styled-components/macro';
import '../data/CarouselData';
import './Carousel.css';
import {gsap} from 'gsap';
import  {IoArrowForward , IoArrowBack} from 'react-icons/io5'
import { motion} from 'framer-motion';


const HeroSection= styled.section`
height:100vh;
max-height: 1100px;
position: relative;
overflow;hidden;
`
const HeroWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content: center;
align-items: center;
overflow:hidden;
positive: relative;
`

const HeroSlide = styled.div`
z-index:1;
width:100%;
height:100%;
`
const HeroSlider = styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;

&::before{
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left:0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(rgba( 1, 9 , 30 , 4) , rgba(1, 9 , 30  , 4));
}
`
const HeroImage = styled.img`
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
object-fit: cover;
`
const HeroContent = styled.div`
z-index: 10;
display:flex;
flex-direction: column;
color: #fff;
`
const arrowButton = css`
color:#fff;
background-color: #000;
width:40px;
height:40px;
cursor:pointer;
user-select:none;
transition: 0.3s;
border-radius: 50%;
margin: 5px;
padding: 7px;
&:hover{
    background-color: pink;
}
`
const SliderButton = styled.div`
position:absoute;
bottom: 50px;
right:50px;
display:flex;
z-index: 10;
`
const PrevArrow = styled(IoArrowBack)`
${arrowButton}
`
const NextArrow = styled(IoArrowForward)`
${arrowButton}
`
const Carousel2 = ( {slides}) => {

const [current, setCurrent] = useState(0);
const length = slides.length
const timeout = useRef(null);

useEffect(() => {
  const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
  }

  timeout.current = setTimeout(nextSlide , 5000);

  return function(){
      if(timeout.current){
          clearTimeout(timeout.current);
      }
  };
} , 
[current, length]
);


const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);

}
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);

}

if(!Array.isArray(slides) || slides.length <= 0){
    return null
}
  return (
    <HeroSection> 
        <HeroWrapper>
        <SliderButton>
                <PrevArrow onClick={prevSlide}/>
            </SliderButton>
            {slides.map((slide, index) => {
                return(
                    <HeroSlide key={index}>
                        {index === current && (
                             <HeroSlider>
                             <HeroImage src={slide.image}/>
                             <HeroContent>
                                 <motion.h1 animate= {{y:-100}} transition={{ duration:2}} className='hero-content1'>{slide.title}</motion.h1>
                                 <motion.h1 animate= {{y:-100}} transition={{ duration:2}} className='hero-content'>{slide.subtitle}</motion.h1>
                                 <motion.p animate= {{y:-100}} transition={{ duration:2}} className='hero-subcontent'>{slide.content}</motion.p>
                                 <motion.p animate= {{y:-100}} transition={{ duration:2}} className='hero-subcontent'>{slide.subcontent}</motion.p>
                                 <div className = "button-section">
                                 <motion.button animate= {{y:-100}} transition={{ duration:2}} className='button-menu1'>{slide.label}</motion.button>
                                 <motion.button animate= {{y:-100}} transition={{ duration:2}}  className='button-menu2'>{slide.sublabel}</motion.button>
                                 </div>
                                
                             </HeroContent>
                          </HeroSlider>
                        )}
                     
                    </HeroSlide>
                );
            })}
            <SliderButton>
                <NextArrow onClick={nextSlide} />
            </SliderButton>
        </HeroWrapper>
    </HeroSection>

  );
        }

export default Carousel2;
