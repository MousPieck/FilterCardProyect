import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<DashboardRoutes />} />
			</Routes>
		</BrowserRouter>
	);
};
