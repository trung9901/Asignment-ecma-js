import instance from "./instance";

export const getAll = () => {
    const url = "/oders";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/oders/${id}`;
    return instance.get(url);
}
export const add = (oders) => {
    const url = `/oders`;
    return instance.post(url, oders);
}
export const remove = (id) => {
    const url = `/oders/${id}`;
    return instance.delete(url);
}
export const update = (oders) => {
    const url = `/oders/${oders.id}`;
    return instance.put(url, oders);
}