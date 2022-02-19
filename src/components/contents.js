import Banner from "./banner";
import {
    getAll
} from '../api/product';
import Category from "./category";
import LoadPost from "./loadposts";
import {
    $
} from '../utils';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import {
    addToCart
} from "../utils/cart"
const Contents = {
    async render() {
        const {
            data
        } = await getAll();
        return /* html */ `
                <div class="w-[1350px] mx-auto ">
                ${await Banner.render()}
                ${await Category.render()}
                <section class="flex gap-6 mt-5">
                    <div class=""><img src="https://picsum.photos/434/220" alt="" class="rounded-lg"></div>
                    <div class=""><img src="https://picsum.photos/434/220" alt="" class="rounded-lg"></div>
                    <div class=""><img src="https://picsum.photos/434/220" alt="" class="rounded-lg"></div>
                </section>
                <section class="products  bg-white mt-5 p-5 rounded-lg">
                    <h1 class="uppercase text-[20px] font-bold hover:text-[#f53d2d]">Sản phẩm</h1>
                    <div class="py-5 grid gap-5 products">
                    ${data.map((products) => /* html */`
                            <div class="product-item">
                            <div class=""><a href="/products/details/${products.id}"><img src="${products.img}" alt="" class="rounded-[10px]" width="200"></a></div>
                            <div class="pt-1 py-3 "><a href="/products/details/${products.id}" class="no-underline "><span
                                class="text-[#4c4c4c] font-bold hover:text-[#f53d2d]">${products.productname}</span></a></div>
                            <div class="">
                            <span class="font-bold text-[#f53d2d]">${products.newprice}₫</span>
                            <span class="line-through text-sm pl-1">${products.oldprice}₫</span>
                            
                            </div>
                                
                            </div>
                            
                    `).join("")}
                    
                    
                    </div>
                </section>
                ${await LoadPost.render()}
                </div>
        `
    }

}
export default Contents;