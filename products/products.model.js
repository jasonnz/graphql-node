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
	return products.find((product) => {
		return product.id === id;
	});
}

function getProductsByPrice(min, max) {
	return products.filter((product) => {
		return product.price >= min && product.price <= max;
	});
}

function addNewProduct(id, description, price) {
	const product = {
		id,
		price,
		description,
		reviews: []
	};

	products.push(product);
	return product;
}

function addNewProductReview(id, rating, comment) {
	const index = products.findIndex((object) => {
		return object.id === id;
	});

	if (index !== -1) {
		products[index].reviews.push({ rating, comment });
	}

	return products[index];
}

module.exports = {
	getAllProducts,
	getProductsById,
	getProductsByPrice,
	addNewProduct,
	addNewProductReview
};
