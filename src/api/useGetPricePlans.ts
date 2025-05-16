import mockData from "../mockData.json";

import useGetBase from "./useGetBase";

const useGetPricePlans = () => useGetBase({ mockData: mockData.pricePlans });
export default useGetPricePlans;
