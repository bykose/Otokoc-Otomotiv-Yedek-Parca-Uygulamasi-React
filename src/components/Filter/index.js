import React from "react";
import Select from "react-select";
import { Products } from "../../fake-db/Products";
import { useProduct } from "../../contexts/ProductsContext";
import styles from "./styles.module.css";

function Filter() {
	const { filtered, onChangeInput } = useProduct();

	const brands=[]
	const model = [];
	const itemNo = [];
	Products.map((item) => brands.push({ value: item.marka, label: item.marka }))
	Products.map((item) => model.push({ value: item.model, label: item.model }));
	Products.map((item) =>
		itemNo.push({ value: item.parcaNo, label: item.parcaNo })
	);

	brands.sort((a, b) => (a.value > b.value ? 1 : -1));
	model.sort(function (a, b) {
		return a.value - b.value;
	});
	itemNo.sort(function (a, b) {
		return a.value - b.value;
	});

	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			<Select 
				placeholder="Marka"
				className={styles.brands}
				classNamePrefix="select"
				defaultValue={""}
				isLoading={false}
				isClearable={true}
				isSearchable={true}
				name="color"
				options={brands}
				onChange={onChangeInput}

			/>
			<Select
				placeholder="Model"
				className={styles.model}
				classNamePrefix="select"
				defaultValue={""}
				isLoading={false}
				isClearable={true}
				isSearchable={true}
				name="color"
				options={model}
				onChange={onChangeInput}
			/>
			<input
				className={styles.input}
				type="text"
				placeholder="Parça No"
				value={filtered}
				onChange={onChangeInput}
                
			/>
		</div>
	);
}

export default Filter;
