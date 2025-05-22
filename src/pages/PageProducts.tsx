import useGetProducts from "../api/useGetProducts";
import Table from "../components/Table";

const PageProducts = () => {
	const { data, setData, isLoading } = useGetProducts();

	//
	return <Table data={data} setData={setData} isLoading={isLoading} />;
};
export default PageProducts;
