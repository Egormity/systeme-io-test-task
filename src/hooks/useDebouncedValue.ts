import { useEffect, useState } from "react";

export const useDebouncedValue = <T>(initialValue: T, delayMs = 500) => {
	const [value, setValue] = useState<T>(initialValue);

	//
	useEffect(() => {
		const timeOut = setTimeout(() => setValue(initialValue), delayMs);
		return () => clearTimeout(timeOut);
	}, [initialValue, delayMs]);

	//
	return value;
};
