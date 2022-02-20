import {
    getAll,
    remove
} from "../../../api/product";
import NavAdmin from "../../../components/NavAdmin";
import {
    reRender
} from "../../../utils/rerender";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AdminProductPage = {
    async render() {
        const {
            data
        } = await getAll();
        return /* html */ `
                    <div class="min-h-full">
                    ${NavAdmin.render()}
                    <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <!-- This example requires Tailwind CSS v2.0+ -->
                        <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2
                            class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                            >
                            Quản lý sản phẩm
                            </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                            <a href="/admin/products/add" class="sm:ml-3">
                                <button
                                    type="button"
                                    class="add-btn inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <!-- Heroicon name: solid/check -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Thêm mới
                                </button>
                            </a>
                        </div>
                        </div>
                    </div>
                    </header>
                    <main class="">
                        
                            <!-- This example requires Tailwind CSS v2.0+ -->
                            <div class="flex flex-col container mx-auto my-10 ">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stt</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên SP</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Đơn giá</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giảm giá</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>
                                        <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    ${data.map((product, index) => `
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                        ${index + 1}
                                        </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${product.productname}</div>

                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <img src="${product.img}" width="100"/>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price)}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ${product.discount}% (${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format((product.price)-(((product.price)*(product.discount))/100))})
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${product.quantity}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900"></div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="/admin/products/${product.id}/edit" class="text-white hover:bg-black  border-0 rounded bg-green-600 py-2 px-3"><i class="fa-solid fa-pen-to-square"></i></a>
                                        
                                        <button data-id=${product.id} class="btn btn-remove text-white hover:bg-black border-0 rounded bg-red-600 py-2 px-3"><i class="fa-solid fa-trash-can"></i></button>
                                
                                        </td>
                                    </tr>
                                    `).join("")}
                                    <!-- More people... -->
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                            </div>
                    </main>
                </div>
        `
    },
    afterRender() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {

            const id = button.dataset.id;

            button.addEventListener('click', () => {
                const confirm = window.confirm("bạn có chắc muốn xóa không ?");
                try {
                    if (confirm) {
                        remove(id).then(() => {
                            reRender(AdminProductPage, "#app");
                            toastr.success("Bạn đã xóa thành công");
                        });
                    } else {
                        toastr.error("Xóa thất bại !");
                    }
                } catch (error) {
                    toastr.error(error.data);
                }

            })
        });
    }
}

export default AdminProductPage;