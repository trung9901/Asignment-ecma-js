import {
    get
} from '../../api/product';
import {
    $
} from '../../utils';
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
    afterRender() {
        $("#addCart").addEventListener('click', () => {

        });
    }
};
export default DetailProductPage;