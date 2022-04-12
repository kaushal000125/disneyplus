import React, { useState, useEffect } from 'react';
import { auth, provider } from '../Firebase.js';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto, setLoginState, setSignOutState } from '../Redux/Reducers/UserReducer';

import disney from "../Images/logo.svg";
import homeIcon from "../Images/home-icon.svg";
import searchIcon from "../Images/search-icon.svg";
import watchIcon from "../Images/watchlist-icon.svg";
import origIcon from "../Images/original-icon.svg";
import movieIcon from "../Images/movie-icon.svg";
import seriesIcon from "../Images/series-icon.svg";
import shutdown from '../Images/shutdown.svg';


const Navbar = () => {
    const [Toggler, setToggler] = useState(false);
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setLoginState({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }));
                history.push("/home");               // after refrashing tha page user again back to login
            }
        })
    }, [dispatch, history]);

    const SignIn = () =>{
        auth.signInWithPopup(provider).then((result)=>{
            let user = result.user;
            dispatch(setLoginState({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }));
            history.push("/home"); //we are pushing back to Home Screen
        });
    }

    const SignOut = () =>{
        auth.signOut().then(()=>{
            dispatch(setSignOutState());
            history.push("/"); //we are pushing back to LoginScreen
        });
    }

    return (
        <>
            <Nav>
                <Navbrand><NavLink to="#"><img src={disney} alt={disney} /></NavLink></Navbrand>
                {
                    !userName ? (
                        <LoginBtn onClick={SignIn}>Log in</LoginBtn>
                    ) : (<>
                        <NavMenu>
                            <NavLink className="nav-link" to="/home"><img style={{width: '0.8rem',height: '0.8rem',objectFit:'contain'}} src={homeIcon} alt={homeIcon} /><span>HOME</span></NavLink>
                            <NavLink className="nav-link" to="#"><img src={searchIcon} alt={searchIcon} /><span>SEARCH</span></NavLink>
                            <NavLink className="nav-link" to="#"><img src={watchIcon} alt={watchIcon} /><span>WATCHLIST</span></NavLink>
                            <NavLink className="nav-link" to="#"><img src={origIcon} alt={origIcon} /><span>ORIGINALS</span></NavLink>
                            <NavLink className="nav-link" to="#"><img src={movieIcon} alt={movieIcon} /><span>MOVIES</span></NavLink>
                            <NavLink className="nav-link" to="#"><img src={seriesIcon} alt={seriesIcon} /> <span>SERIES</span></NavLink>
                        </NavMenu>

                        <UserImg onClick={()=> setToggler(true)}><img src={userPhoto} alt={userName} /></UserImg>                        
                        <SignOutBtn show={Toggler} onClick={()=> setToggler(false)}>
                            <li><NavLink className="nav-link" to="/home"><img src={homeIcon} alt={homeIcon} /><span>HOME</span></NavLink></li>
                            <li><NavLink onClick={SignOut} className="nav-link" to="/"><img src={shutdown} alt={homeIcon} /><span>SignOut</span></NavLink></li>
                        </SignOutBtn>
                      


                    </>
                    )}
            </Nav>
        </>
    );
};
const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 0 37px;
    min-height: 9vh;
    align-items: center;
    flex-direction: row;
    background-color: #040714;
    justify-content: space-between;
    z-index: 1500;
    opacity: 1;
      /* Animations */
    transition-timing-function: ease-in;
    transition: all 0.5s;
`;
const Navbrand = styled.div`
    padding: 0;
    width: 101px;
    height: auto;
    display: inline-block;
    margin-top: 1.5vh;
    img {
        width: 101px;
        height: auto;
        object-fit: fill;
        @media screen and (min-width: 280px) and (max-width: 550px){
            width: 75px;
            height: auto;
            object-fit: fill;
        }   
    }
`;
const NavMenu = styled.div`
    display: flex;
    height: 100%;
    padding: 0;
    margin: 0;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-right: auto;
    margin-left: 3rem;
    position: relative;

    > .nav-link {
        display: flex;
        align-items: center;
        margin-right: 1rem;
        @media screen and (min-width: 992px) and (max-width: 1200px){ margin-right: 0.5rem; }
        img{
            width: 1.3rem;
            height: 1.3rem;
            z-index: auto;
            object-fit: fill;
        }
        span {
            font-size: 1rem;          
            line-height: 1.08;
            white-space: nowrap;
            position: relative;
            letter-spacing: 1px;
            padding: 0.5rem;
            margin-top: 5px;

            &:before {
                left: 0px;
                opacity: 0;
                right: 0px;
                content: "";
                height: 2px;
                width: auto;
                bottom: -6px;
                position: absolute;
                visibility: hidden;
                transform-origin: left center;
                border-radius: 0px 0px 4px 4px;
                background-color: rgb(249, 249, 249);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media screen and (min-width: 280px) and (max-width: 991px){
        display: none;
    }
`;
const LoginBtn = styled.a`
    cursor: pointer;
    padding: 5px 16px;    
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: 1px solid #f9f9f9;
    transition: all 0.2s ease 0s;
    background-color: rgba(0, 0, 0, 0.6);
    @media screen and (min-width: 280px) and (max-width: 550px){
        font-size: 0.8rem;
        padding: 4px 13px;
    }   
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;
const UserImg = styled.div`
    height: 50px;
    width: 50px;
    cursor: pointer;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
    }
`;
const SignOutBtn = styled.div`
    top: 7vh;
    width: auto;
    height: auto;
    right: 3.5rem;
    display: flex;
    position: absolute;
    border-radius: 4px;
    align-items: center;
    padding: 0.5rem 1rem;
    justify-content: center;
    flex-direction: column;
    background-color: #040714;
    border: 1.3px solid rgba(151, 151, 151, 1);
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    display: ${props => props.show ? 'flex' : 'none'};
    @media screen and (min-width: 280px) and (max-width: 550px){
        top: 9vh;
        padding: 0.5rem;
    }
    li{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        border-bottom: 1.3px solid rgba(151, 151, 151, 1);
        margin: 0.5vh 0;
        > .nav-link{
            @media screen and (min-width: 280px) and (max-width: 550px){
                font-size: 0.8rem;
            }
            img{
                margin: 0 0.5rem;
                width: 0.9rem;
                height: 0.8rem;
                object-fit: cover;
                @media screen and (min-width: 280px) and (max-width: 550px){
                    margin: 0 0.3rem;
                    width: 0.7rem;
                    height: auto;
                }
            }
        }
    }

`;
export default Navbar;