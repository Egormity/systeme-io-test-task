import { useEffect, useRef, useState } from "react";

import type { NullUndefinedAble } from "../types/utilities";

import Input from "./Input";
import ButtonArrowDownRotate from "./buttons/ButtonArrowDownRotate";
import ButtonCross from "./buttons/ButtonCross";

type TItem = { name: string; value: string };
const Dropdown = ({
	data,
	onChange,
}: {
	data: NullUndefinedAble<Array<TItem>>;
	onChange?: (item: TItem | null) => void;
}) => {
	const [selected, setSelected] = useState<TItem | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(s => !s);
	const containerRef = useRef<HTMLDivElement | null>(null);

	//
	useEffect(() => {
		onChange?.(selected);
	}, [selected]);

	//
	useEffect(() => {
		if (!isOpen) return;
		const listener = (e: MouseEvent) => {
			if (isOpen && containerRef.current && !containerRef.current.contains(e.target as Node))
				setIsOpen(false);
		};
		document.addEventListener("click", listener);
		return () => document.removeEventListener("click", listener);
	}, [isOpen]);

	//
	return (
		<div className="relative" ref={containerRef}>
			<Input
				inputProps={{
					placeholder: "Select",
					readOnly: true,
					onClick: toggleOpen,
					className: "outline-none cursor-pointer",
					value: selected?.name || "",
				}}
				contentRight={
					<div className="flex items-center gap-3">
						<ButtonCross buttonProps={{ onClick: () => setSelected(null) }} />
						<ButtonArrowDownRotate buttonProps={{ onClick: toggleOpen }} isRotate={isOpen} />
					</div>
				}
			/>

			{/*  */}
			{isOpen && (
				<div className="absolute -bottom-1 left-0 flex w-full translate-y-[100%] flex-col overflow-hidden rounded-3xl bg-stone-50 shadow-lg">
					{data?.map(el => (
						<button
							className="w-full px-5 py-3 text-left first-of-type:pt-4 last-of-type:pb-4 hover:bg-stone-100"
							onClick={() => {
								setSelected(el);
								toggleOpen();
							}}
							key={name + "/" + el.value}
						>
							{el.name}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
export default Dropdown;
