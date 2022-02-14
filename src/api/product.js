import instance from "./instance";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const add = (products) => {
    const url =`/products`;
    return instance.post(url, products);
}