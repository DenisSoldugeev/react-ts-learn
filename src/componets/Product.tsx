import React, {useState} from 'react';
import {IProduct} from "../modals";

interface ProductProps {
	product: IProduct
}


function Product(props: ProductProps) {
	const [details, setDetails] = useState(false);

	const {product} = props

	const btnBgColorClass = details ? 'bg-yellow-400' : 'bg-blue-400'
	const btnClasses = ['py-2 px-4 border mt-3', btnBgColorClass]

	return (
		<div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
			<img src={product.image} alt={product.title} className="w-1/6"/>
			<p>{product.title}</p>
			<p className="font-bold">
				{product.price}
			</p>
			<button className={btnClasses.join(' ')}
			        onClick={() => setDetails(prevState => !prevState)}
			>
				{details ? 'Hide Details' : 'Show Details'}
			</button>

			{details && <div className="text-center mt-3">
				<p>{product.description}</p>
				{product.rating && <p className="mt-4">Rate: <span className="font-bold">{product.rating.rate}</span></p>}
			</div>
			}
		</div>
	);
}

export default Product;