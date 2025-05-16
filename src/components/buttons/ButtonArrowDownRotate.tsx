import classNames from "classnames";
import React from "react";

const ButtonArrowDownRotate = ({
	buttonProps,
	isRotate,
}: {
	buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
	isRotate?: boolean;
}) => {
	return (
		<button
			{...buttonProps}
			className={classNames(
				"scale-y-[1.75] px-1 duration-300",
				isRotate ? "-rotate-90" : "rotate-90",
				buttonProps?.className,
			)}
		>
			{">"}
		</button>
	);
};

export default ButtonArrowDownRotate;
