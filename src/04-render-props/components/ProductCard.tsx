import { createContext, CSSProperties } from 'react';
import {
	Product,
	ProductContextProps,
	onChangeArgs,
	InitialValues,
} from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({
	children,
	onChange,
	product,
	className,
	value,
	style,
	initialValues,
}: ProductCardProps) => {
	const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
		onChange,
		product,
		value,
		initialValues,
	});

	return (
		<Provider value={{ counter, increaseBy, product, maxCount }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,
					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};

export interface ProductCardProps {
	//children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	onChange?: (args: onChangeArgs) => void;
	product: Product;
	value?: number;
	style?: CSSProperties;
	initialValues?: InitialValues;
}
