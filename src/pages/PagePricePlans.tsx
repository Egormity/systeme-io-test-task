import useGetPricePlans from "../api/useGetPricePlans";
import Table from "../components/Table";

const PagePricePlans = () => {
	const { data, isLoading } = useGetPricePlans();

	//
	return <Table data={data} isLoading={isLoading} />;
};
export default PagePricePlans;
