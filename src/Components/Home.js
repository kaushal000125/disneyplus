import React, { useEffect } from 'react';
import styled from 'styled-components';
import db from '../Firebase';
import { setDisneyMovies } from '../Redux/Reducers/MovieReducer';
import { useDispatch } from 'react-redux';


import HBanner from './Home/HBanner.js';
import Brand from './Home/Brand.js';
// import disneybody from '../Images/disneybody.png';
import Originals from './Home/Originals';
import Trending from './Home/Trending';
import Hollywood from './Home/Hollywood';
import KidsTv from './Home/KidsTv';
import Popular from './Home/Popular';
import NewToD from './Home/NewToD';


const Home = () => {
    const dispatch = useDispatch();

    let populars = [];
    let hollywoods = [];
    let newTos = [];
    let kidsTvs = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection("Movies").onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {

                switch (doc.data().type) {
                    case "popular":
                        populars = [...populars, { id: doc.id, ...doc.data() }];
                        break;
                    case "hollywood":
                        hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
                        break;
                    case "newTo":
                        newTos = [...newTos, { id: doc.id, ...doc.data() }];
                        break;
                    case "kidsTv":
                        kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
                        break;
                    case "original":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
                    case "trending":
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                    default:
                        break;
                }
            });
            dispatch(setDisneyMovies({
                popular: populars,
                hollywood: hollywoods,
                newTo: newTos,
                kidsTv: kidsTvs,
                original: originals,
                trending: trending
            }))
        });
    }, []);

    return (
        <>
            <Container>
                <HBanner />
                <Brand />
                <Originals />
                <NewToD />
                <Trending />
                <Hollywood />
                <KidsTv />
                <Popular />
            </Container>
        </>
    );
};
const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    margin-bottom: 11vh;
    &:after {
        background: url("https://prod-static.disney-plus.net/us-east-1/builds/0dbbdb5797cc274df6952863958f9afdbaa6cf27/node_modules/dss-junglebook/components/themes/images/background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;
export default Home;