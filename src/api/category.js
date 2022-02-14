import instance from "./instance";

export const getAll = () => {
    const url = "/category";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/category/${id}`;
    return instance.get(url);
}
export const add = (category) => {
    const url =`/category`;
    return instance.category(url, category);
}
export const remove = (id) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}
export const update = (category) => {
    const url = `/category/${category.id}`;
    return instance.put(url, category);
}