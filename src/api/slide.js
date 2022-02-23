import instance from "./instance";

export const getAll = () => {
    const url = "/slides";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/slides/${id}`;
    return instance.get(url);
}
export const add = (slides) => {
    const url = `/slides`;
    return instance.post(url, slides);
}
export const remove = (id) => {
    const url = `/slides/${id}`;
    return instance.delete(url);
}
export const update = (slides) => {
    const url = `/slides/${slides.id}`;
    return instance.put(url, slides);
}