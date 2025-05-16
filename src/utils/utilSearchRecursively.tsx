export const utilSearchRecursively = (item: unknown, target: string): boolean => {
	if (item === null || item === undefined) return false;
	if (typeof item === "string" || typeof item === "number" || typeof item === "boolean")
		return item.toString().includes(target);

	//
	if (Array.isArray(item)) return item.some(el => utilSearchRecursively(el, target));

	//
	if (typeof item === "object") return Object.values(item).some(el => utilSearchRecursively(el, target));

	//
	return false;
};
