function Price() {
  
}

Price.prototype.products = function(products) {
  var price = 0;
  for (var key in products) {
    price += products[key].price * products[key].quantity;
  }
  return price;
};

Price.prototype.total = function(products, priceTransport) {
  return this.products(products) + priceTransport;  
};