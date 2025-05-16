import mockData from "../mockData.json";

import useGetBase from "./useGetBase";

const useGetPages = () => useGetBase({ mockData: mockData.pages });
export default useGetPages;
