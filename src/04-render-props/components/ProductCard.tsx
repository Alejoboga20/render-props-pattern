import { createContext, CSSProperties, ReactElement } from 'react';
import {
	Product,
	ProductContextProps,
	onChangeArgs,
	InitialValues,
} from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

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
	const { counter, increaseBy } = useProduct({ onChange, product, value, initialValues });

	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};

export interface ProductCardProps {
	children?: ReactElement | ReactElement[];
	className?: string;
	onChange?: (args: onChangeArgs) => void;
	product: Product;
	value?: number;
	style?: CSSProperties;
	initialValues?: InitialValues;
}
