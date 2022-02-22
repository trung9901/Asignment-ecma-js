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

export const increaseItemInCart = (id, next) => {
    cart.find(product => product.id === id).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}

export const decreaseItemInCart = (id, next) => {
    const currenProduct = cart.find(product => product.id === id);
    currenProduct.quantity--;
    // nếu sản phẩm giảm nhỏ hơn 1 thì xóa
    if (currenProduct.quantity < 1) {
        const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
        if (confirm) {
            cart = cart.filter(item => item.id !== currenProduct.id);
        } else {
            currenProduct.quantity++;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}

export const removeItemInCart = (id, next) => {
    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
    if (confirm) {
        cart = cart.filter(item => item.id !== id);
    } else {

    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}

// -----------------------