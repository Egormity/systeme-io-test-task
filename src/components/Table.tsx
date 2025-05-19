import { useMemo, useState } from "react";

import { useDebouncedValue } from "../hooks/useDebouncedValue";
import type { NullUndefinedAble } from "../types/utilities";
import { utilRenderJsxRecursively } from "../utils/utilRenderJsxRecursively";
import { utilSearchRecursively } from "../utils/utilSearchRecursively";

import Dropdown from "./Dropdown";
import Input from "./Input";
import Loader from "./Loader";
import Modal from "./Modal";
import NoData from "./NoData";
import Button from "./buttons/Button";
import ButtonCross from "./buttons/ButtonCross";

type TItem = { [key: string]: unknown };
const Table = <T extends Array<TItem>>({
	data,
	isLoading,
	isSearch = true,
	isEditable = true,
}: {
	data: NullUndefinedAble<T>;
	isLoading?: NullUndefinedAble<boolean>;
	isSearch?: NullUndefinedAble<boolean>;
	isEditable?: boolean;
}) => {
	const [searchValue, setSearchValue] = useState("");
	const [searchField, setSearchField] = useState<keyof TItem | null>(null);
	const debouncedSearchValue = useDebouncedValue(searchValue);

	//
	const [editItem, setEditItem] = useState<TItem | null>(null);
	const isEditModalOpen = !!editItem;
	const openEditModal = (item: TItem) => setEditItem(item);
	const closeEditModal = () => setEditItem(null);

	//
	const filteredData = useMemo(() => {
		if (!debouncedSearchValue) return data;
		return data?.filter(el => {
			if (searchField) return utilSearchRecursively(el[searchField], debouncedSearchValue);
			return utilSearchRecursively(el, debouncedSearchValue);
		});
	}, [data, debouncedSearchValue, searchField]);

	//
	if (isLoading) return <Loader />;
	if (!data) return <NoData />;

	//
	const columnsData = Object.keys(data?.[0] || {});

	//
	return (
		<>
			<div className="h-full max-h-screen w-full space-y-5 overflow-auto p-5">
				{isSearch && (
					<div className="flex items-center gap-3">
						<Input
							containerProps={{
								className: "ml-auto",
							}}
							inputProps={{
								placeholder: "Search",
								value: searchValue,
								onChange: e => setSearchValue(e.target.value),
							}}
						/>
						<Dropdown
							data={columnsData?.map(el => ({ name: el, value: el }))}
							onChange={item => setSearchField(item?.value || null)}
						/>
					</div>
				)}

				{/*  */}
				<table className="w-full rounded-4xl bg-stone-100 text-left">
					<thead>
						<tr>
							{columnsData?.map(key => (
								<th className="p-5 text-xl" key={key}>
									{key}
								</th>
							))}
							{isEditable && <th></th>}
						</tr>
					</thead>

					{/*  */}
					<tbody>
						{filteredData?.map(row => {
							const rowKey = JSON.stringify("id" in row ? row.id : JSON.stringify(row));
							return (
								<tr className="odd:bg-stone-50" key={rowKey}>
									{Object.values(row).map(value => {
										// prettier-ignore
										const valueKey = rowKey + "/" + (value && typeof value === "object" && "id" in value ? JSON.stringify(value.id) : JSON.stringify(value));
										return (
											<td className="px-5 py-3" key={valueKey}>
												{utilRenderJsxRecursively(value)}
											</td>
										);
									})}
									{isEditable && (
										<td className="px-5 py-3">
											<Button buttonProps={{ onClick: () => openEditModal(row) }}>Edit</Button>
										</td>
									)}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			{/*  */}
			<Modal
				isOpen={isEditModalOpen}
				toggleOpen={closeEditModal}
				containerProps={{ className: "min-w-96 flex flex-col items-center gap-5" }}
			>
				<div className="flex w-full items-center justify-between">
					<h1 className="text-2xl">Edit (json values)</h1>
					<ButtonCross buttonProps={{ onClick: closeEditModal }} />
				</div>
				<div className="w-full space-y-3">
					{Object.entries(editItem || {}).map(([key, value]) => (
						<div className="w-full">
							<p>{key}</p>
							<Input
								containerProps={{ className: "bg-stone-100" }}
								inputProps={{
									value: JSON.stringify(value).slice(),
									className: "w-full",
									onChange: e =>
										setEditItem(s => ({
											...s,
											[key]: (() => {
												try {
													const value = JSON.parse(e.target.value);
													return value;
												} catch (error) {
													alert(error instanceof Error ? error.message : "Unknown error");
													return s?.[key];
												}
											})(),
										})),
								}}
							/>
						</div>
					))}
				</div>
				<Button
					buttonProps={{
						onClick: () => {
							alert("Saving edited data feature not implemented");
							// closeEditModal();
						},
						className: "text-xl",
					}}
				>
					Save
				</Button>
			</Modal>
		</>
	);
};
export default Table;
