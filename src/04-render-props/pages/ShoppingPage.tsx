import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<ProductCard key={product.id} product={product} className='bg-dark text-white'>
				<ProductImage className='custom-image' />
				<ProductTitle className='text-bold' />
				<ProductButtons className='custom-buttons' />
			</ProductCard>
		</div>
	);
};
