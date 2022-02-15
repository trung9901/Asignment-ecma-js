import {
    update
} from '../../../api/posts';
import {
    get
} from '../../../api/posts';
import NavAdmin from "../../../components/NavAdmin";
import {
    reRender
} from "../../../utils/rerender";
import axios from "axios";
const AdminEditPost = {
    async render(id) {
        const {
            data
        } = await get(id);
        return `
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
                                Thêm bài viết
                                </h2>
                            </div>
                            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                <a href="/admin/news" class="sm:ml-3">
                                    <button
                                        type="button"
                                        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <!-- Heroicon name: solid/check -->
                                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Quay lại
                                    </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </header>
                        <main>
                        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 border rounded border-gray-500">
                            <form action="" id="form-edit-post">
                                <div>
                                <label for="" class=" block text-xl text-gray-700 font-bold">Tiêu đề</label>
                                <input type="text" placeholder="Tiêu đề bài viết" class="border border-gray-700 rounded py-1 px-3" id="title-post" value="${data.title}">
                                </div>
                                <div class="py-2">
                                <label for=""  class=" block text-xl text-gray-700 font-bold">Hình ảnh</label>
                                <input type="file" class="border border-gray-700 rounded" id="img-post">
                                <img src="${data.img}" class="float-right" width="300">
                                </div>
                                <div class="py-2">
                                <label for=""  class=" block text-xl text-gray-700 font-bold">Mô tả</label>
                                <textarea name="" id="desc-post" cols="30" rows="10" class="border border-gray-700 rounded w-96 p-1">${data.desc}</textarea>
                                

                                </div>
                                <button class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cập nhật</button>
                            </form>
                            
                        </div>
                        </main>
                    </div>
        `
    },
    afterRender(id) {
        const formEdit = document.querySelector('#form-edit-post');
        const imgPost = document.querySelector('#img-post');

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dneaxae9c/image/upload";
        const CLOUDINARY_PRESET = "img_upload";

        formEdit.addEventListener('submit', async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_PRESET)
            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            })
            update({
                id,
                "title": document.querySelector('#title-post').value,
                "img": response.data.url,
                "desc": document.querySelector('#desc-post').value
            })
            document.location.href = "/admin/news";
            await reRender(AdminNewsPage, "#app");
        })
    }
};
export default AdminEditPost;