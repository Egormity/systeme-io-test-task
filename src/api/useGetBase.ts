import { useEffect, useState } from "react";

const RANDOM_MS = 1000;
const useGetBase = <T>({ mockData }: { mockData: T }) => {
	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState(false);

	//
	useEffect(() => {
		(async () => {
			setIsLoading(true);
			Promise.resolve(
				setTimeout(() => {
					setData(mockData);
					setIsLoading(false);
				}, Math.random() * RANDOM_MS),
			);
		})();
	}, [mockData]);

	//
	return { data, setData, isLoading };
};
export default useGetBase;
