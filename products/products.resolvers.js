const productsModel = require('./products.model');

module.exports = {
	Query: {
		products: () => {
			return productsModel.getAllProducts();
		},
		productsById: (_, args) => {
			return productsModel.getProductsById(args.id);
		},
		productsByPrice: (_, args) => {
			return productsModel.getProductsByPrice(args.min, args.max);
		}
	},
	Mutation: {
		addNewProduct: (_, args) => {
			return productsModel.addNewProduct(args.id, args.description, args.price);
		},
		addNewProductReview: (_, args) => {
			return productsModel.addNewProductReview(args.id, args.rating, args.comment);
		}
	}
};
