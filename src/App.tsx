import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import PageHome from "./pages/PageHome";
import PagePages from "./pages/PagePages";
import PagePricePlans from "./pages/PagePricePlans";
import PageProducts from "./pages/PageProducts";

const App = () => {
	return (
		<BrowserRouter>
			<Navigation />

			{/*  */}
			<Routes>
				<Route path="/" element={<PageHome />} />
				<Route path="/pages" element={<PagePages />} />
				<Route path="/price-plans" element={<PagePricePlans />} />
				<Route path="/products" element={<PageProducts />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
