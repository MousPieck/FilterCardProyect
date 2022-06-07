import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { Prodotto } from "../pages/ProdottoPage/Prodotto";
import { Navbar } from "../components/Navbar/Navbar";

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="prodotti/:prodottiid" element={<Prodotto />} />
			</Routes>
		</>
	);
};
