import instance from "./instance";

export const getAll = () => {
    const url = "/categories";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/categories/${id}?_embed=products`;
    return instance.get(url);
}
export const add = (categories) => {
    const url = `/categories`;
    return instance.post(url, categories);
}
export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}
export const update = (categories) => {
    const url = `/categories/${categories.id}`;
    return instance.put(url, categories);
}

// export const getCate = (id) => {
//     const url = `/category/${id}?_embed=products`;
//     return instance.get(url);
// };
// export const getCate = (id) => {
//     const url = `/postCates/${id}?_embed=posts`;
//     return instance.get(url);
// }