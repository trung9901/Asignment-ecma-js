import { get } from '../api/product';

const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
                <h1>${data.productname}</h1>
                <img src="${data.img}" />    
                <p>${data.newprice}</p>
            `

    },
};
export default DetailNewsPage;

