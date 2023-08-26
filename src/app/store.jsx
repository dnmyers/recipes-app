import { createStore, combineReducers } from 'redux';

import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice';
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

0
const reducers = {
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
};

export const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// *** Can also be written without creating
// *** a reducers object like so:
// export const store = createStore(
//     combineReducers({
//         allRecipes: allRecipesReducer,
//         favoriteRecipes: favoriteRecipesReducer,
//         searchTerm: searchTermReducer,
//     })
// );

// *** *** *** *** *** *** *** *** *** *** *** *** //
// *** Using @reduxjs/toolkit (Recommended way)*** //
// import { configureStore } from '@reduxjs/toolkit';
// export const store = configureStore({
//     reducer: {
//         allRecipes: allRecipesReducer,
//         favoriteRecipes: favoriteRecipesReducer,
//         searchTerm: searchTermReducer,
//     }
// });