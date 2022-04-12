import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectNewTo } from '../../Redux/Reducers/MovieReducer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const NewToD = () => {
    const movies = useSelector(selectNewTo);
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } },
            { breakpoint: 425, settings: { slidesToShow: 1 } }
        ]
    };
    return (
        <>
            <Title>New to Disney</Title>
            <Carousel {...settings}>
                {
                    movies && movies.map((val, index) => (
                        <Wrap key={index}>
                            <NavLink className="slide-img" to={`/detail/${val.id}`}><img src={val.CardImg} alt={val.CardImg} /></NavLink>
                        </Wrap>
                    ))
                }
            </Carousel>
        </>
    );
};
const Title = styled.h2`
    margin: 2vh 0 1vh 2rem;
    text-transform: uppercase;
    font-weight: 400 !important;
    text-shadow: 0.1rem 0.1rem 1rem rgba(255,255,255,0.2);
    @media screen and (min-width: 550px) and (max-width: 767px){
        font-size: 1.1rem;
    }
    @media screen and (min-width: 280px) and (max-width: 550px){
        font-size: 0.9rem;
    }
`;
const Carousel = styled(Slider)`
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }
    .slick-slide{
        padding: 0 0.4rem;
        @media screen and (min-width: 425px) and (max-width: 1200px){
            padding: 0 0.3rem;
        }
    }
    .slick-list{
        overflow: initial;
        padding: 0 -1rem;
        @media screen and (max-width: 425px){
            padding: 0 -0.5rem;
        }
    }
    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
`;

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    > .slide-img {
        img {
            width: 100%;
            height: 15vh;
            object-fit: fill;
            @media screen and (min-width: 280px) and (max-width: 1200px){
                width: 100%;
                height: auto;
                object-fit: cover;
            }
        } 
    }
    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }
`;
export default NewToD;