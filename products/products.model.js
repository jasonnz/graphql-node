const products = [
	{
		id: 'redshoe',
		description: 'Red Shoe',
		price: 185.9,
		reviews: []
	},
	{
		id: 'bluejean',
		description: 'Blue Jeans',
		price: 150.9,
		reviews: []
	}
];

function getAllProducts() {
	return products;
}

function getProductsById(id) {
	return products.filter((product) => {
		return product.id === id;
	});
}

function getProductsByPrice(min, max) {
	return products.filter((product) => {
		return product.price >= min && product.price <= max;
	});
}

module.exports = {
	getAllProducts,
	getProductsById,
	getProductsByPrice
};
