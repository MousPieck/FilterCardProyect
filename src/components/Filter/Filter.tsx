import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMenu, TCategory, TPrezzo, TTypeMenu } from "../../models/Filter";
import { categoriaRx, prezzoRx, saleRx } from "../../store/slices/iu.slice";
import { RootState } from "../../store/store";
import styles from "./Filter.module.scss";

export const Filter: React.FC<IMenu> = ({ propieta, voce }) => {
	const { iu } = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const dispatchType = (
		type: TTypeMenu,
		sottoCategorie: TPrezzo | TCategory,
	) => {
		if (type === "categorie") {
			if (sottoCategorie === iu.categoria) {
				dispatch(categoriaRx(""));
				return;
			}

			dispatch(categoriaRx(sottoCategorie as TCategory));
		} else if (type === "prezzi") {
			if (sottoCategorie === iu.prezzo) {
				dispatch(prezzoRx(""));
				return;
			}

			dispatch(prezzoRx(sottoCategorie as TPrezzo));
		}
	};

	const check = (name: string): JSX.Element => {
		return (
			<>
				<div className="field-checkbox animate__animated animate__fadeIn">
					<Checkbox
						inputId="binary"
						checked={iu.checked}
						onChange={(e) => dispatch(saleRx(e.checked))}
					/>
					<label htmlFor="binary">{name}</label>
				</div>
			</>
		);
	};

	const categorie = (sottoCategorie: TPrezzo | TCategory) => {
		return (
			<li
				key={sottoCategorie}
				onClick={() => {
					dispatchType(voce.type, sottoCategorie);
				}}
				className={`${
					iu.categoria === sottoCategorie ||
					iu.prezzo === sottoCategorie
						? styles.select
						: styles.lista
				}`}
			>
				{sottoCategorie}
			</li>
		);
	};

	return (
		<div className={styles.container}>
			<h1 onClick={() => setIsOpen(!isOpen)} className={styles.tittle}>
				{propieta}
			</h1>
			<hr />
			{voce.type === "checkbox"
				? isOpen && check(voce.label as string)
				: isOpen && (
						<ul className="animate__animated animate__fadeIn">
							{voce.categorie?.map((sottoCategorie) => {
								return categorie(sottoCategorie);
							})}
						</ul>
				  )}
		</div>
	);
};
