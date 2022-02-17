let cart = [];
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
}

export const addToCart = (newProduct, next) => {
    const existProduct = cart.find(product => product.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity++;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}