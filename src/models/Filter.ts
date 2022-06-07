import { IBeer } from "./beers";

export type TPropieta =
	| "DISPONIBILITA"
	| "PREZZO"
	| "CATEGORIE"
	| "PREZZO E CATEGORIE"
	| "DISPONIBILITA E PREZZO E CATEGORIE";
export type TPrezzo =
	| "A meno di 20 EUR"
	| "20 - 50 EUR"
	| "50 - 100 EUR"
	| "100 - 200 EUR"
	| "200 EUR e più";

export type TCategory =
	| "Domestic Specialty"
	| "Import"
	| "Non-Alcoholic Beer"
	| "Non Beer"
	| "Ontario Craft"
	| "Premium"
	| "Value";

export type TTypeMenu = "checkbox" | "categorie" | "prezzi";

export interface IMenu {
	propieta: TPropieta;
	voce: {
		label?: string;
		categorie?: TPrezzo[] | TCategory[];

		type: TTypeMenu;
	};
}
export interface IFilterBeers {
	birre: IBeer[];
	prezzo?: TPrezzo;
	categoria?: TCategory;
	type: TPropieta;
}
