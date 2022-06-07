import { IMenu, TCategory, TPrezzo } from "../../models/Filter";
import { Filter } from "../Filter/Filter";
import styles from "./Menu.module.scss";

const prezzo: TPrezzo[] = [
	"A meno di 20 EUR",
	"20 - 50 EUR",
	"50 - 100 EUR",
	"100 - 200 EUR",
	"200 EUR e più",
];
const categoria: TCategory[] = [
	"Domestic Specialty",
	"Import",
	"Non-Alcoholic Beer",
	"Non Beer",
	"Ontario Craft",
	"Premium",
	"Value",
];
const prueba: IMenu[] = [
	{
		propieta: "DISPONIBILITA",
		voce: {
			label: " In Sconto",
			type: "checkbox",
		},
	},
	{
		propieta: "PREZZO",
		voce: {
			categorie: prezzo,
			type: "prezzi",
		},
	},
	{
		propieta: "CATEGORIE",
		voce: {
			categorie: categoria,
			type: "categorie",
		},
	},
];

export const Menu = () => {
	return (
		<div className={styles.menu}>
			{prueba.map((dati) => {
				return <Filter key={dati.propieta} {...dati} />;
			})}
		</div>
	);
};
