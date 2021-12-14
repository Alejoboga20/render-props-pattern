import { useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface ProductInCart extends Product {
	count: number;
}

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCountChange = ({ counter, product }: onChangeArgs) => {
		setShoppingCart((oldShoppingCard) => {
			if (counter === 0) {
				const { [product.id]: toDelete, ...rest } = oldShoppingCard;
				console.log(toDelete);

				return { ...rest };
			}

			return {
				...oldShoppingCard,
				[product.id]: { ...product, count: counter },
			};
		});
	};

	return {
		onProductCountChange,
		shoppingCart,
	};
};
