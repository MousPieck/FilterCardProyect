import { IBeer } from "../models/beers";
import { IFilterBeers, TCategory, TPrezzo, TPropieta } from "../models/Filter";

export const cercareBirraPerNome = (id: number = 0, birre: IBeer[]): IBeer => {
	const risultati = birre.find((birra) => birra.product_id === id);

	return risultati as IBeer;
};

export const cercareBirraPerCategoria = (
	categoria: TCategory,
	birre: IBeer[],
): IBeer[] => {
	const risultati = birre.filter((birra) => birra.category === categoria);
	return risultati;
};
export const cercareBirraPerSale = (birre: IBeer[]): IBeer[] => {
	const risultati = birre.filter((birra) => birra.on_sale);
	return risultati;
};

export const cercareBirraPerPrezzo = (
	prezzoString: TPrezzo,
	birre: IBeer[],
): IBeer[] => {
	switch (prezzoString) {
		case "200 EUR e più":
			return birre.filter((birra) => Number(birra.price) >= 200);

		case "100 - 200 EUR":
			return birre.filter(
				(birra) =>
					Number(birra.price) > 100 && Number(birra.price) < 200,
			);
		case "50 - 100 EUR":
			return birre.filter(
				(birra) =>
					Number(birra.price) > 50 && Number(birra.price) < 100,
			);

		case "20 - 50 EUR":
			return birre.filter(
				(birra) => Number(birra.price) > 20 && Number(birra.price) < 50,
			);

			break;
		case "A meno di 20 EUR":
			return birre.filter((birra) => Number(birra.price) < 20);

		default:
			return birre;
	}
};

export const filterBeers = ({
	type,
	categoria,
	birre,
	prezzo,
}: IFilterBeers): IBeer[] => {
	switch (type) {
		case "DISPONIBILITA":
			return cercareBirraPerSale(birre);
		case "CATEGORIE":
			return cercareBirraPerCategoria(categoria as TCategory, birre);
		case "PREZZO":
			return cercareBirraPerPrezzo(prezzo as TPrezzo, birre);
		case "PREZZO E CATEGORIE":
			const birreCategorie = cercareBirraPerCategoria(
				categoria as TCategory,
				birre,
			);
			return cercareBirraPerPrezzo(prezzo as TPrezzo, birreCategorie);

		case "DISPONIBILITA E PREZZO E CATEGORIE":
			const birrePerCategorie = cercareBirraPerCategoria(
				categoria as TCategory,
				birre,
			);
			const birrePrezzo = cercareBirraPerPrezzo(
				prezzo as TPrezzo,
				birrePerCategorie,
			);
			return cercareBirraPerSale(birrePrezzo);
		default:
			return birre;
	}
};

export const slice = (birre: IBeer[], number: number): IBeer[] => {
	return birre.slice(number, number + 6);
};
