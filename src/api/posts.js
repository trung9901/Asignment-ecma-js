import instance from "./instance";

export const getAll = () => {
    const url = "/posts";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
}
export const add = (posts) => {
    const url =`/posts`;
    return instance.post(url, posts);
}
export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
}
export const update = (posts) => {
    const url = `/posts/${posts.id}`;
    return instance.put(url, posts);
}