import useGetProducts from "../api/useGetProducts";
import Table from "../components/Table";

const PageProducts = () => {
	const { data, isLoading } = useGetProducts();

	//
	return <Table data={data} isLoading={isLoading} />;
};
export default PageProducts;
