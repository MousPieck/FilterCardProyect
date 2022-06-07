import { Paginator, PaginatorPageState } from "primereact/paginator";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cercareBirraPerPrezzo, slice } from "../../helper";
import { IBeer } from "../../models/beers";
import { RootState } from "../../store/store";
import Card from "./Card/Card";
import styles from "./CardList.module.scss";
import { cercareBirraPerCategoria } from "../../helper/index";

export const CardList = () => {
	const { br, iu } = useSelector((state: RootState) => state);
	const [birreFiltro, setBirreFiltro] = useState<IBeer[]>([]);
	const [counter, setCounter] = useState<number>(br.dati.length);
	const [primo, setPrimo] = useState<number>(0);

	const getFilterBeers = () => {
		let result = [...br.dati];
		if (iu.checked) {
			result = br.dati.filter(({ on_sale }) => on_sale === true);
		}
		if (iu.categoria) {
			result = cercareBirraPerCategoria(iu.categoria, result);
		}
		if (iu.prezzo) {
			result = cercareBirraPerPrezzo(iu.prezzo, result);
		}
		setCounter(result.length);
		setBirreFiltro(slice(result, primo));
	};
	useEffect(() => {
		getFilterBeers();
	}, [primo, iu]);

	const onContentPageChange = (event: PaginatorPageState) => {
		setPrimo(event.first);
	};
	return (
		<div className={styles.container}>
			<div className={styles.cardList}>
				{birreFiltro.length === 0 ? (
					<p>Senza Risultati</p>
				) : (
					birreFiltro.map((birre) => {
						return <Card key={birre.beer_id} {...birre} />;
					})
				)}
			</div>
			<Paginator
				first={primo as number}
				rows={6}
				totalRecords={counter}
				onPageChange={onContentPageChange}
				className={styles.paginator}
				template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
			></Paginator>
		</div>
	);
};
