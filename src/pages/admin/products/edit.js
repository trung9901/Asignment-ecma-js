import axios from "axios";
import {
    update
} from "../../../api/product";
import {
    get
} from "../../../api/product";
import NavAdmin from "../../../components/NavAdmin";
import {
    reRender
} from "../../../utils/rerender";
import $ from 'jquery';
import validate from 'jquery-validation';
import AdminProductPage from "./index";

const AdminProductsEditPage = {
    async render(id) {
        const {
            data
        } = await get(id);
        return /* html */ `
                    <div class="min-h-full bg-slate-300 pb-40">
                    ${NavAdmin.render()}
                    <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <!-- This example requires Tailwind CSS v2.0+ -->
                        <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2
                            class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                            >
                            Cập nhật Sản Phẩm
                            </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                            <a href="/admin/products" class="sm:ml-3">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <!-- Heroicon name: solid/check -->

                                    Quay lại
                                </button>
                            </a>
                        </div>
                        </div>
                    </div>
                    </header>
                    <main class="container mx-auto mt-10 px-40 ">
                        <div class="mt-5 md:mt-0 md:col-span-2 ">
                        <form action="" id="form-add-products">
                            <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="grid grid-cols-3 gap-6">
                                <div class="sm:col-span-1">
                                    <label for="company-website" class="block text-base font-medium text-gray-700"> Tên sản phẩm </label>
                                    <input type="text" name="" id="name-products" value="${data.productname}" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full p-1 border border-gray-300 rounded-md" required>
                                </div>

                                </div>
                                <div class="grid grid-cols-3 gap-6">
                                <div class="sm:col-span-1">
                                <label for="" class="block font-medium text-gray-700"> Đơn Giá (đ)</label>
                                <input type="number" name="" id="price-products" value="${data.price}" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full p-1 border border-gray-300 rounded-md" placeholder=" VNĐ">
                              
                                </div>

                                <div class="sm:col-span-1">
                                <label for="" class="block font-medium text-gray-700"> Giảm Giá (%)</label>
                                <input type="number" name="" id="discount-products" value="${data.discount}" min="0" max="100" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full p-1 border border-gray-300 rounded-md "placeholder=" %">
                          
                                </div>
                                <div class="sm:col-span-1">
                                <label for="" class="block font-medium text-gray-700"> Số lượng</label>
                                <input type="number" name="" id="quantity-products" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full p-1 border border-gray-300 rounded-md "placeholder=" " value="${data.quantity}">
                          
                                </div>
                                </div>

                                <div>
                                <label class="block font-medium text-gray-700"> Ảnh sản phẩm </label>
                                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div class="flex justify-between ">
                                            <div><input type="file" name="" id="img-products" class=""></div>
                                            
                                            <div><img id="previewImage"  src="${data.img} " alt="" width="200"></div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">                                     <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>Cập nhật</button>
                            </div>
                            </div>
                        </form>
                        </div>  
                    </main>
                    </div>
        
        `
    },
    afterRender(id) {
        const formAdd = $('#form-add-products');
        const imgProducts = document.querySelector("#img-products");
        const imgPreview = document.querySelector('#previewImage');
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dneaxae9c/image/upload";
        const CLOUDINARY_PRESET = "img_upload";
        let imgLink = "";

        imgProducts.addEventListener("change", function (e) {
            imgPreview.src = URL.createObjectURL(e.target.files[0])
        });

        formAdd.validate({
            submitHandler() {
                async function addProduct() {
                    const file = imgProducts.files[0];
                    if (file) {
                        const formData = new FormData();

                        formData.append('file', file);
                        formData.append('upload_preset', CLOUDINARY_PRESET)
                        const {
                            data
                        } = await axios.post(CLOUDINARY_API, formData, {
                            headers: {
                                "Content-Type": "application/form-data"
                            }

                        });
                        imgLink = data.url;
                    }
                    update({
                        id,
                        "productname": document.querySelector("#name-products").value,
                        "price": document.querySelector("#price-products").value,
                        "discount": document.querySelector("#discount-products").value,
                        "quantity": document.querySelector("#quantity-products").value,
                        "img": imgLink ? imgLink : imgPreview.src,
                    }).then(async () => {
                        document.location.href = "/#/admin/products";
                        await reRender(AdminProductPage, "#app");
                    })
                }
                addProduct();
            }
        })


    }
}

export default AdminProductsEditPage;