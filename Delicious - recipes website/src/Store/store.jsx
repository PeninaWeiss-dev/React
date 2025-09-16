import { configureStore } from "@reduxjs/toolkit";
import userSlice from './UserSlice'
import RecipesSlice from './RecipesSlice'

const store = configureStore({
    reducer: {
        user: userSlice,
        recipes: RecipesSlice,

    },
});

export default store;