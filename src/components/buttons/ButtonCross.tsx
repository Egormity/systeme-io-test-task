import classNames from "classnames";
import React from "react";

const ButtonCross = ({ buttonProps }: { buttonProps?: React.HTMLAttributes<HTMLButtonElement> }) => {
	return (
		<button {...buttonProps} className={classNames("scale-x-[1.4] px-1", buttonProps?.className)}>
			X
		</button>
	);
};

export default ButtonCross;
