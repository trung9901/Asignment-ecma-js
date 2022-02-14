import instance from "./instance";

export const getAll = () => {
    const url = "/blog";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/blog/${id}`;
    return instance.get(url);
}
export const add = (blog) => {
    const url =`/blog`;
    return instance.post(url, blog);
}