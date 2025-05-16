import classNames from "classnames";

const Button = ({
	buttonProps,
	children,
	// type,
}: {
	buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
	children?: React.ReactNode;
	// type?: "";
}) => {
	return (
		<button
			{...buttonProps}
			className={classNames(
				"rounded-2xl border border-stone-100 bg-stone-200 px-4 py-1",
				buttonProps?.className,
			)}
		>
			{children}
		</button>
	);
};
export default Button;
