import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import db from '../../Firebase.js';

import playIconBlack from "../../Images/play-icon-black.png";
import playIconWhite from "../../Images/play-icon-white.png";
import groupIcon from "../../Images/group-icon.png";

const Detail = () => {
    const { id } = useParams();
    const [Detail, setDetail] = useState();
    useEffect(() => {
        db.collection("Movies").doc(id).get().then((doc) => {
            if (doc.exists) {
                setDetail(doc.data());
            } else {
                console.log("Detail can't fetched");
            }
        })
    }, [id]);
    return (
        <>
            {Detail && (<>
                    <BackgroundImg style={{background: `linear-Gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.4)),url(${Detail.BackgroundImg})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                    <Container>
                        <BgContent>
                            <ImageTitle><img alt="title/img" src={Detail.TitleImg} /></ImageTitle>
                            <h2>{Detail.Genres}</h2>
                            <p>{Detail.Description}</p>
                            <Controls>
                                <PlayBtn type="button"><img src={playIconBlack} alt={playIconBlack} /><span>Play</span></PlayBtn>
                                <TrailerBtn type="button"><img src={playIconWhite} alt={playIconWhite} /><span>Trailer</span></TrailerBtn>
                                <AddtoPlayList type="button"><span></span><span></span></AddtoPlayList>
                                <GroupWatch type="button"><img src={groupIcon} alt={groupIcon} /></GroupWatch>
                            </Controls>
                        </BgContent>
                    </Container>
                    </BackgroundImg>
                </>
            )}
        </>
    );
};
const BackgroundImg = styled.main`
    min-height: 95vh;
    @media screen and (min-width: 991px) and (max-width: 1200px){
        min-height: 72vh;
    }
    @media screen and (min-width: 768px) and (max-width: 991px){
        min-height: 67vh;
    }
    @media screen and (min-width: 550px) and (max-width: 767px){
        min-height: 65vh;
    }
    @media screen and (min-width: 280px) and (max-width: 767px){
        min-height: 55vh;
        background-size: fill;
    }
`;
const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const ImageTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 450px;
    min-height: auto;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    margin-top: 19vh;
    @media screen and (min-width: 550px) and (max-width: 1200px){
        max-width: 325px;
    }
    @media screen and (min-width: 550px) and (max-width: 767px){
        max-width: 250px;
    }
    @media screen and (min-width: 375px) and (max-width: 550px){
        max-width: 165px;
    }
    @media screen and (min-width: 280px) and (max-width: 375px){
        max-width: 145px;
    }
    img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`;
const BgContent = styled.div`
    display: flex;
    min-height: 95vh;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    position: relative;
    
    @media screen and (min-width: 991px) and (max-width: 1200px){
        min-height: 72vh;
    }
    @media screen and (min-width: 768px) and (max-width: 991px){
        min-height: 67vh;
    }
    @media screen and (min-width: 280px) and (max-width: 767px){
        min-height: 65vh;
        background-size: fill;
    }

    h2{
        color: rgb(249, 249, 249);
        font-size: 1.2rem;
        font-weight: 500;
        @media screen and (min-width: 550px) and (max-width: 1200px){
            font-size: 1rem;
        }
        @media screen and (min-width: 375px) and (max-width: 767px){
            font-size: 0.75rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 0.7rem;
            max-width: 250px;
        }
    }
    p{
        line-height: 1.4;
        font-size: 20px;
        padding: 1rem 0;
        color: rgb(249, 249, 249);
        max-width: 650px;
        @media screen and (min-width: 550px) and (max-width: 1200px){
            font-size: 1rem;
            max-width: 550px;
        }
        @media screen and (min-width: 375px) and (max-width: 767px){
            padding: 0.5rem 0;
            font-size: 0.75rem;
            max-width: 400px;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            padding: 0.3rem 0;
            font-size: 0.75rem;
            max-width: 400px;
        }
    }
`;
const Controls = styled.div`
    display: flex;
    margin: 24px 0px;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: flex-start;
    @media screen and (min-width: 375px) and (max-width: 550px){
        margin: 15px 0px;
        flex-flow: row wrap;
    }
    @media screen and (min-width: 280px) and (max-width: 375px){
        margin: 7px 0px;
        flex-flow: row wrap;
    }
`;
const PlayBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    font-size: 1.2rem;
    margin-right: 22px;
    border-radius: 0.345rem;    
    color: rgb(0, 0, 0);
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    text-transform: uppercase;
    background: rgba (249, 249, 249, 1);
    border: 1px solid rgb(249, 249, 249);
    @media screen and (min-width: 550px) and (max-width: 1200px){
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 550px){
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px){
        font-size: 0.8rem;
        border-radius: 0.145rem;    
        padding: 0.4rem 0.7rem;
        margin-right: 13px;
        background: #f9f9ff;
    }
    img {
        width: 32px;
        height: auto;
        object-fit: contain;
        @media screen and (min-width: 550px) and (max-width: 1200px){
            width: 25px;
        }
        @media screen and (min-width: 280px) and (max-width: 550px){
            width: 19px;
        }
    }
`;
const TrailerBtn = styled(PlayBtn)`
    color: rgb(249, 249, 249);
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgb(249, 249, 249);
    &:hover {
        background: rgb(198, 198, 198);
    }
`;
const AddtoPlayList = styled.div`
    height: 41px;
    width: 41px;
    display: flex;
    cursor: pointer;
    margin-right: 22px;
    align-items: center;
    flex-direction: row;
    justify-content: center;  
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);
    
    @media screen and (min-width: 550px) and (max-width: 1200px){
        height: 35px;
        width: 35px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px){
        height: 29px;
        width: 29px;
        margin-right: 13px;
    }

    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;

        &:first-child {
            height: 2px;
            width: 16px;
            transform: translate(1px, 0px) rotate(0deg);
            @media screen and (min-width: 280px) and (max-width: 550px){
                width: 15px;
            }
        }

        &:nth-child(2) {
            width: 2px;
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            @media screen and (min-width: 280px) and (max-width: 550px){
                height: 13px;
            }
        }
    }
`;
const GroupWatch = styled.div`
    height: 39px;
    width: 39px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    background: rgb(0, 0, 0);
    border: 2px solid #fff;
    @media screen and (min-width: 280px) and (max-width: 1200px){
        height: 31px;
        width: 31px;
    }
        img {
            width: 100%;
            object-fit: contain;
            @media screen and (min-width: 550px) and (max-width: 1200px){
                height: 29px;
                width: 29px;    
            }
            @media screen and (min-width: 280px) and (max-width: 550px){
                height: 23px;
                width: 23px;    
            }
        }
`;

export default Detail;