import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCategory, TPrezzo } from "../../models/Filter";

interface IInitial {
	checked: boolean;
	categoria: TCategory | "";
	prezzo: TPrezzo | "";
}

const initialState: IInitial = {
	checked: false,
	categoria: "",
	prezzo: "",
};

const iuSlice = createSlice({
	name: "[IU]",
	initialState,
	reducers: {
		saleRx: (state, action: PayloadAction<boolean>) => {
			state.checked = action.payload;
		},
		prezzoRx: (state, action: PayloadAction<TPrezzo | "">) => {
			state.prezzo = action.payload;
		},
		categoriaRx: (state, action: PayloadAction<TCategory | "">) => {
			state.categoria = action.payload;
		},
	},
});

export const { saleRx, categoriaRx, prezzoRx } = iuSlice.actions;
export default iuSlice.reducer;
