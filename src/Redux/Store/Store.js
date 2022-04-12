import { configureStore } from '@reduxjs/toolkit';

import disneyReducer from '../Reducers/MovieReducer';
import UserReducer from '../Reducers/UserReducer';

//import MovieReducer from '../Reducers/MovieReducer.js';
//import disneyReducer from '../Reducer/MovieReduer.js.js';
//import UserReducer from '../Reducer/UserReducer.js.js';

export const Store = configureStore({
    reducer: {
        movie: disneyReducer,
        user: UserReducer
    },
});