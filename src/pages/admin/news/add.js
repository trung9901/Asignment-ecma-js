import axios from "axios";
import {
  add
} from "../../../api/posts";
import NavAdmin from "../../../components/NavAdmin";
import {
  reRender
} from "../../../utils/rerender";
import $ from 'jquery';
import validate from 'jquery-validation';
import AdminNewsPage from './index';

const AdminNewsAddPage = {
  render() {
    return /* html */ `
        <div class="min-h-full bg-slate-300 pb-40 ">
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

                            Quay lại
                        </button>
                    </a>
                </div>
                </div>
            </div>
            </header>
            <main class="">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 border rounded-lg border-gray-300 mt-10 bg-white flex">
                <form action="" id="form-add-post">
                    <div>
                    <label for="" class=" block text-lg text-gray-700 font-medium">Tiêu đề</label>
                    <input type="text" placeholder="Tiêu đề bài viết" class="border border-gray-300 rounded py-1 px-3" id="title-post" name="title-post">
                    </div>
                    <div class="py-2">
                     <label for=""  class=" block text-lg text-gray-700 font-medium">Hình ảnh</label>
                     <input type="file" class="border border-gray-300 rounded" id="img-post" name="img-post">
                     
                    </div>
                    
                    <div class="py-2">
                      <label for=""  class=" block text-lg text-gray-700 font-medium">Mô tả</label>
                      <textarea name="desc-post" id="desc-post" cols="30" rows="10" class="border border-gray-300 rounded w-96 p-1"></textarea>
                        
                    </div>
                    <button class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>Thêm mới</button>
                    
                </form>
                <div class="ml-28 mt-10">
                    <img id="previewImage"  src="https://2.bp.blogspot.com/-muVbmju-gkA/Vir94NirTeI/AAAAAAAAT9c/VoHzHZzQmR4/s580/placeholder-image.jpg" alt="" width="500">
                </div>
            </div>
            </main>
        </div>
        `;
  },
  afterRender() {
    const formAdd = $('#form-add-post');
    const imgPost = document.querySelector('#img-post');
    const imgPreview = document.querySelector('#previewImage');
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dneaxae9c/image/upload";
    const CLOUDINARY_PRESET = "img_upload";
    let imgLink = "";

    imgPost.addEventListener("change", function (e) {
      imgPreview.src = URL.createObjectURL(e.target.files[0])
    });

    formAdd.validate({
      rules: {
        "title-post": "required",
        "img-post": "required",
        "desc-post": "required",
      },
      messages: {
        "title-post": "<p class='text-red-500'>Nhập tiêu đề bài viết</p> ",
        "img-post": "<p class='text-red-500'>Không để trống ảnh</p>",
        "desc-post": "<p class='text-red-500'>Nhập mô tả bài viết</p>"
      },
      submitHandler() {
        async function addNews() {
          const file = imgPost.files[0];
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
            })
            imgLink = data.url;

          }
          add({
            "title": document.querySelector('#title-post').value,
            "img": imgLink || "",
            "desc": document.querySelector('#desc-post').value
          }).then(async () => {
            document.location.href = "/#/admin/news";
            await reRender(AdminNewsPage, "#app");
          })

        }
        addNews();
      }

    })
  }
};
export default AdminNewsAddPage;
// fixAdd


// submitHandle: () => {
//   async function handleAddProduct(){
//      // code in here
//   }
//   handleAddProduct()
// }