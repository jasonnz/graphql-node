const ordersModel = require('./orders.model');

module.exports = {
	Query: {
		orders: () => {
			const order = ordersModel.getAllOrders();
			console.log(order);
			return order;
		}
	}
};
