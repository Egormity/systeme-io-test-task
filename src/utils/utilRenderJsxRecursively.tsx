export const utilRenderJsxRecursively = (item: unknown): React.ReactNode => {
	return (
		<div>
			{(() => {
				if (item === null || item === undefined) return "-";

				//
				if (typeof item === "string" || typeof item === "number") return item;
				if (item instanceof Date) return item.toLocaleDateString();
				if (typeof item === "boolean") return item + "";

				//
				if (Array.isArray(item))
					return item.map((el, i) => (
						<span key={i}>
							{i !== 0 && ", "}
							{utilRenderJsxRecursively(el)}
						</span>
					));

				//
				if (typeof item === "object")
					return (
						<div>
							{Object.entries(item).map(([key, value], i) => (
								<div className="flex items-center gap-2" key={i}>
									<span>{key}: </span> {utilRenderJsxRecursively(value)}
								</div>
							))}
						</div>
					);

				//
				return "-";
			})()}
		</div>
	);
};
