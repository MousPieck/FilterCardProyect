import { combineReducers, configureStore } from "@reduxjs/toolkit";
import beerSlice from "./slices/beer.slice";
import iuSlice from "./slices/iu.slice";
const rootReducers = combineReducers({
	iu: iuSlice,
	br: beerSlice,
});
export type RootState = ReturnType<typeof rootReducers>;
export const store = configureStore({
	reducer: rootReducers,
});
