import { createSlice } from "@reduxjs/toolkit";
import beer from "../../data/beers.json";
import { IBeer } from "../../models/beers";

interface IState {
	dati: IBeer[];
}
const initialState: IState = {
	dati: beer,
};
const brSlice = createSlice({
	name: "[BR]",
	initialState,
	reducers: {
		state: (state) => {
			return state;
		},
	},
});

export default brSlice.reducer;
