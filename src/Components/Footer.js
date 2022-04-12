import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/logo.svg';

const Footer = () => {

    const [Year, setYear] = useState();
    useEffect(() => {
        const getYear = () => setYear(new Date().getFullYear());
        getYear();
    }, []);

    return (
        <>
            <DisneyFooter>
                <Container>
                    <FooterImg><img src={Logo} alt="Disney/Logo" /></FooterImg>
                    <Nav>
                        <li><NavLink to="" className="nav-link">English</NavLink></li>
                        <li><NavLink to="" className="nav-link">Subscriber Agreement</NavLink></li>
                        <li><NavLink to="" className="nav-link">Privacy Policy</NavLink></li>
                        <li><NavLink to="" className="nav-link">Your California Privacy</NavLink></li>
                        <li><NavLink to="" className="nav-link">Do Not Sell My Info</NavLink></li>
                        <li><NavLink to="" className="nav-link">Children's Online Privacy Policy</NavLink></li>
                        <li><NavLink to="" className="nav-link">Closed Captioning</NavLink></li>
                        <li><NavLink to="" className="nav-link">Interest-Based-Ads</NavLink></li>
                        <li><NavLink to="" className="nav-link">Supported Devices</NavLink></li>
                        <li><NavLink to="" className="nav-link">Help</NavLink></li>
                        <li><NavLink to="" className="nav-link m-t">Gift Disney+</NavLink></li>
                        <li><NavLink to="" className="nav-link m-t">About US</NavLink></li>
                        <li><NavLink to="" className="nav-link m-t">Disney+ Partner Program</NavLink></li>
                        <li><NavLink to="" className="nav-link m-t">Premier Access</NavLink></li>
                        <li><NavLink to="" className="nav-link m-t">The Disney Bundle</NavLink></li>
                    </Nav>
                    <CopyRight><p>&copy; DisneyPlusHotStar Clone-By Kaushal Chakardhari.   All Rights Reserved {Year}</p></CopyRight>
                </Container>
            </DisneyFooter>
        </>
    );
};
const DisneyFooter = styled.footer`
    padding: 2rem 0;
    margin-bottom: 0;
    @media screen and (min-width: 280px) and (max-width: 550px){
        padding: 1rem 0;
    }
`;
const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const FooterImg = styled.div`
    text-align: center;
    img{
        width: 10rem;
        height: auto;
        object-fit: fill;
        @media screen and (min-width: 550px) and (max-width: 767px){
            width: 8rem;
        }
        @media screen and (min-width: 280px) and (max-width: 550px){
            width: 7rem;
        }
    }
`;
const Nav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    li{
        list-style: none;
    }
    > li .nav-link{
        padding: 0.5rem;
        font-size: 0.9rem;
        margin: 0 0.3rem 0vh 0;
        display: inline-block;
        @media screen and (min-width: 550px) and (max-width: 767px){
            font-size: 0.85rem;
            padding: 0.1rem;
        }
        @media screen and (min-width: 280px) and (max-width: 550px){
            font-size: 0.75rem;
            padding: 0.1rem;
        }
    }
`;
const CopyRight = styled.div`
    text-align: center;
    p{
        font-size: 1.2rem;
        @media screen and (min-width: 280px) and (max-width: 767px){
            font-size: 1rem;
        }
    }
`;
export default Footer;