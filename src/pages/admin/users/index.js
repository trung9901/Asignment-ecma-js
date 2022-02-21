import {
    getAll,
    remove
} from "../../../api/user";
import NavAdmin from "../../../components/NavAdmin";
import {
    reRender
} from "../../../utils/rerender";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AdminUsersPage = {
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
                            Quản lý tài khoản
                            </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                          
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
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên tài khoản</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                                        <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    ${data.map((users, index) => `
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                        ${index + 1}
                                        </div>
                                        </td>
                                        
                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${users.username}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${users.email}</div>
                                        </td>
                                 

                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${users.password}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="/#/admin/users/${users.id}/edit" class="text-white hover:bg-black  border-0 rounded bg-green-600 py-2 px-3"><i class="fa-solid fa-pen-to-square"></i></a>
                                        
                                        <button data-id=${users.id} class="btn btn-remove text-white hover:bg-black border-0 rounded bg-red-600 py-2 px-3"><i class="fa-solid fa-trash-can"></i></button>
                                
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
                            reRender(AdminUsersPage, "#app");
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


export default AdminUsersPage;