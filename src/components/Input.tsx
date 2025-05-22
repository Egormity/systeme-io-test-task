import classNames from "classnames";

const Input = ({
	containerProps,
	inputProps,
	contentRight,
}: {
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	inputProps?: Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> & {
		placeholder?: string;
		value?: string;
		onChange?: (e: { target: { value: string } }) => void;
		readOnly?: boolean;
		disabled?: boolean;
	};
	contentRight?: React.ReactNode;
}) => {
	return (
		<div
			{...containerProps}
			className={classNames(
				"flex h-12 items-center gap-5 rounded-2xl bg-stone-50",
				!!contentRight && "pr-5",
				containerProps?.className,
			)}
		>
			<input
				{...inputProps}
				className={classNames("h-full px-5", inputProps?.className)}
				placeholder={inputProps?.placeholder || "Type.."}
			/>
			{contentRight}
		</div>
	);
};
export default Input;
