import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/CardList/Card/Card";
import { cercareBirraPerNome } from "../../helper";
import { RootState } from "../../store/store";
import styles from "./Prodotto.module.scss";
import { cercareBirraPerCategoria } from "../../helper/index";
import { TCategory } from "../../models/Filter";
const text =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
export const Prodotto = () => {
	const { prodottiid } = useParams();
	const beers = useSelector((state: RootState) => state.br.dati);
	const birre = useMemo(
		() => cercareBirraPerNome(Number(prodottiid), beers),
		[prodottiid],
	);
	const birreCorrelati = cercareBirraPerCategoria(
		birre.category as TCategory,
		beers,
	);
	const birreSlice = birreCorrelati.slice(0, 4);
	return (
		<div className={styles.container}>
			<div className={styles.prodotto}>
				<Card {...birre} children={text} />
			</div>
			<div className={styles.correlati}>
				{birreSlice.map((birra) => {
					return <Card {...birra} />;
				})}
			</div>
		</div>
	);
};
