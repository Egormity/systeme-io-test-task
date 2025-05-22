import useGetPricePlans from "../api/useGetPricePlans";
import Table from "../components/Table";

const PagePricePlans = () => {
	const { data, setData, isLoading } = useGetPricePlans();

	//
	return <Table data={data} setData={setData} isLoading={isLoading} />;
};
export default PagePricePlans;
