import {
    get
} from '../../api/product'
import {
    $
} from '../../utils';
import {
    addToCart
} from '../../utils/cart';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

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
    afterRender(id) {
        $("#addCart").addEventListener('click', async () => {
            const {
                data
            } = await get(id);
            addToCart(...{
                data,
                quantity: 1,
                function () {
                    toastr.success(`Thêm ${data.productname} vào giỏ hàng thành công !`)
                }
            })
        });
    }
};
export default DetailProductPage;