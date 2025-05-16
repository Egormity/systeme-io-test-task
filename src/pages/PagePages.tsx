import useGetPages from "../api/useGetPages";
import Table from "../components/Table";

const PagePages = () => {
	const { data, isLoading } = useGetPages();

	//
	return <Table data={data} isLoading={isLoading} />;
};
export default PagePages;
