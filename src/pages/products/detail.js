import {
    get
} from '../../api/product'
// import {
//     $
// } from '../../utils';

import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
    addToCart
} from "../../utils/cart"
import $ from 'jquery';
import validate from "jquery-validation"
const DetailProductPage = {
    async render(id) {
        const {
            data
        } = await get(id);
        return `
        <div class="w-auto bg-[#f4f4f4] ">
        <header class="" id="header">
            ${await Header.render()}
        </header>
        <div class="w-[1350px] mx-auto ">
            <main class="bg-white rounded-lg my-5 p-5 flex">
                <form action="" id="form-add-cart">
                <article class="">
                <h1 class="uppercase font-bold text-xl">${data.productname}</h1>
                <div class="flex mt-5">
                    <section class="">
                    <figure><img src="${data.img}" alt="" width="500"></figure>
                    </section>
                    <section class="ml-5">
                    <div class="flex">
                        <div class=""><span>Tình trạng:</span><span class="ml-2 text-green-500">Còn hàng</span></div>
                        <span class="mx-3 font-bold">|</span>
                        <div class=""><span>Thương hiệu:</span><span class="ml-2 text-green-500">XML</span></div>
                    </div>
                    <hr class="my-5">
                    <div class="">
                        <span class="text-base">Nội dung đang cập nhật...</span>
                        <h1 class="text-red-500 text-3xl font-bold bg-gray-100 rounded-lg p-3 mt-5">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format((data.price) - (((data.price) * (data.discount)) / 100))}</h1>
                    </div>
                    <div class="my-3">
                        <div class="">
                        <div class="font-bold my-3">Màu sắc:</div>
                        <div class="flex my-1 ">
                            <span class="font-bold my-3 ">Số lượng:</span>
                            <div class="flex ml-3">
                       
                            <input type="number" name="quantity" id="inputValue" min="1" value="1" max="${data.quantity}"
                                class="border rounded-lg mx-2 w-20 pl-5 font-bold" required>
                           
    
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="">
                        <button type="submit" class="btn bg-red-500 rounded-lg py-3 px-8" id="addCart" ><i
                            class="fa-solid fa-cart-plus mr-3 text-white text-lg "></i><span
                            class="text-white text-lg font-bold uppercase">Thêm
                            vào
                            giỏ hàng</span> </button>
                        <button class="text-white text-lg font-bold uppercase bg-yellow-400 rounded-lg py-3 px-20 mx-3">Mua
                        ngay</button>
                    </div>
                    <div class="border border-dashed rounded-lg border-red-600 mt-5 bg-red-50 p-2">
                        <h5 class="border-2 rounded-full border-red-600 p-1 px-3 w-fit text-red-600 font-bold "><i
                            class="fa-solid fa-gift mr-2"></i>Code
                        Ưu Đãi</h5>
                        <div class="border-b border-dashed border-red-600">
                        <p>Nhập mã <span class="font-bold">MEWMALL</span> để được giảm ngay 100k (áp dụng cho các đơn hàng
                            trên 500k)</p>
                        <button class="text-white font-bold border-0 rounded-full px-3 py-1 bg-orange-600 my-2">Sao
                            chép</button>
                        </div>
                        <div class="">
                        <p>Nhập mã <span class="font-bold">MEWMEWSN</span> để được giảm ngay 20% tổng giá trị đơn hàng. Số
                            lượng có hạn</p>
                        <button class="text-white font-bold border-0 rounded-full px-3 py-1 bg-orange-600 my-2">Sao
                            chép</button>
                        </div>
    
                    </div>
    
                    </section>
                </div>
    
                </article>
                </form>
                <aside class="w-80 ml-5">
                <div class="border rounded-lg p-3">
                    <h3 class="font-bold text-xl">Chỉ có tại MewMall</h3>
                    <ul>
                    <li class="border-t text-lg py-2"><a href=""><i
                            class="fa-solid fa-shield text-3xl text-green-500 mx-3"></i> Sản phẩm an
                        toàn</a></li>
                    <li class="border-t text-lg py-2"><a href=""><i
                            class="fa-solid fa-hand text-3xl text-green-500 mx-3"></i>Chất lượng cam
                        kết</a></li>
                    <li class="border-t text-lg py-2"><a href=""><i
                            class="fa-solid fa-check-double text-3xl text-green-500 mx-3"></i>Dịch vụ
                        vượt
                        trội</a></li>
                    <li class="border-t text-lg py-2"><a href=""><i
                            class="fa-solid fa-truck-fast text-3xl text-green-500 mx-3"></i>Giao hàng
                        nhanh
                        chóng</a></li>
                    </ul>
                </div>
                <div class="mt-5 bg-amber-100 rounded-lg p-3">
                    <span class="font-bold">Hỗ trợ mua hàng</span>
                    <p class="font-bold text-red-600 text-xl"><a href="">1900 123 321</a></p>
                </div>
                </aside>
            </main>
            <div class="border rounded-lg bg-white p-5">
                <h3 class="font-bold mb-5">Thông tin chi tiết</h3>
                <hr>
                <p class="mt-5">Nội dung đang cập nhật...</p>
            </div>
            <div class="border rounded-lg bg-white p-5 my-5">
                <h1 class="uppercase font-bold text-xl">sản phẩm khác</h1>
            </div>
        </div>
        <div class="bg-red-600 pt-1 mt-10"></div>
        ${Footer.render()}
    </div>
            `

    },
    afterRender(id) {
        Header.afterRender();

        const inputValue = document.querySelector('#inputValue');
        const inputValuemax = document.querySelector('#inputValue').max
        // $("#addCart").addEventListener('click', async () => {
        //     const {
        //         data
        //     } = await get(id);
        //     addToCart({
        //         ...data,
        //         quantity: inputValue.value ? +inputValue.value : 1,
        //     }, function () {
        //         toastr.success("Thêm vào giỏ hàng thành công!");
        //     })
        // });


        $("#form-add-cart").validate({
            rules: {
                "quantity": "required",
            },
            messages: {
                "quantity": { max: "<p class='text-red-500'>số lượng sản phẩm </p>".inputValuemax },
            },
            submitHandler() {

                async function addCart() {
                    const { data } = await get(id);
                    addToCart({
                        ...data, quantity: inputValue.value ? +inputValue.value : 1,
                    }, function () {
                        toastr.success("Thêm vào giỏ hàng thành công!");
                    })
                }
                addCart();
            }
        })
    }
};
export default DetailProductPage; 