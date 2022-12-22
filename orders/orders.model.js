const orders = [
	{
		date: '2005-05-05',
		subtotal: 336.8,
		items: [
			{
				product: {
					id: 'redshoe',
					description: 'Old Red Show',
					price: 115.0
				},
				quantity: 2
			}
		]
	}
];

function getAllOrders() {
	return orders;
}

module.exports = {
	getAllOrders
}