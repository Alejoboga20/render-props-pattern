import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value);

	const isMounted = useRef(false);

	const increaseBy = (value: number) => {
		let newValue = Math.max(counter + value, 0);

		if (initialValues?.maxCount) {
			newValue = Math.min(newValue, initialValues.maxCount);
		}

		setCounter(newValue);
		onChange && onChange({ product, counter: newValue });
	};

	useEffect(() => {
		if (!isMounted.current) return;

		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		increaseBy,
	};
};

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}
