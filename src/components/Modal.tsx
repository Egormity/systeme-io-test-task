import classNames from "classnames";
import { useEffect, useRef } from "react";

const Modal = ({
	isOpen,
	toggleOpen,
	children,
	containerProps,
}: {
	isOpen: boolean;
	toggleOpen: () => void;
	children: React.ReactNode;
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
}) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	//
	useEffect(() => {
		if (!isOpen) return;
		const listener = (e: MouseEvent) => {
			if (isOpen && containerRef.current && !containerRef.current.contains(e.target as Node)) toggleOpen();
		};
		document.addEventListener("click", listener);
		return () => document.removeEventListener("click", listener);
	}, [isOpen]);

	//
	if (!isOpen) return;
	return (
		<div className="fixed z-[997] flex h-screen w-screen items-center justify-center backdrop-opacity-25">
			<div
				className="absolute top-0 left-0 z-[998] h-full w-full bg-black opacity-20"
				onClick={toggleOpen}
			/>
			<div
				{...containerProps}
				className={classNames(
					"relative z-[999] max-h-[90vh] overflow-auto rounded-3xl bg-stone-50 p-5",
					containerProps?.className,
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
