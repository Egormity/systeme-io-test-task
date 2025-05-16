import mockData from "../mockData.json";
import useGetBase from "./useGetBase";

const useGetProducts = () => useGetBase({ mockData: mockData.products });
export default useGetProducts;
