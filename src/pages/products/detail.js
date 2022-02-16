import {
    get
} from '../../api/product';

const DetailProductPage = {
    async render(id) {
        const {
            data
        } = await get(id);
        return `
                <h1>${data.productname}</h1>
                <img src="${data.img}" />    
                <p>${data.newprice}</p>
                <button id="addCart">add to cart</button>
            `

    },
};
export default DetailProductPage;