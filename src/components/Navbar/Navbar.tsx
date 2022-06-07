import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<nav className={styles.nav}>
			<h2 className={styles.tittle} onClick={() => navigate("/")}>
				Birre
			</h2>
			<div className={styles.container}>
				<NavLink
					to="/"
					className={(nav) => (nav.isActive ? styles.attivo : "")}
				>
					PRODOTTI
				</NavLink>
				<NavLink
					to="/auth"
					className={(nav) => (nav.isActive ? styles.attivo : "")}
				>
					ACCOUNT
				</NavLink>
			</div>
		</nav>
	);
};
