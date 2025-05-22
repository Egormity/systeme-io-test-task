import useGetPages from "../api/useGetPages";
import Table from "../components/Table";

const PagePages = () => {
	const { data, setData, isLoading } = useGetPages();

	//
	return <Table data={data} setData={setData} isLoading={isLoading} />;
};
export default PagePages;
