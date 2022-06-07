import { CardList } from "../../components/CardList/CardList";
import { Menu } from "../../components/Menu/Menu";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
	return (
		<div className={styles.home}>
			<Menu />
			<CardList />
		</div>
	);
};
