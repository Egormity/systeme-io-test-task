import classNames from "classnames";
import { NavLink } from "react-router-dom";

//
const data = [
	{ path: "/products", name: "Products" },
	{ path: "/price-plans", name: "Price plans" },
	{ path: "/pages", name: "Pages" },
];

//
const Navigation = () => {
	return (
		<nav className="flex h-full flex-col items-center bg-stone-50 text-2xl">
			<NavLink to="/" className="w-full px-7 py-5">
				<img src="logo.png" className="h-16 w-16" />
			</NavLink>
			{data.map(el => (
				<NavLink
					to={el.path}
					key={el.path}
					className={({ isActive }) =>
						classNames(
							"w-full p-5",
							isActive ? "bg-stone-100" : "text-stone-400 hover:bg-stone-100 hover:text-stone-600",
						)
					}
				>
					{el.name}
				</NavLink>
			))}
		</nav>
	);
};
export default Navigation;
