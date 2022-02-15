import {
    getAll
} from "../api/posts";

const LoadPost = {
    async render() {
        const {
            data
        } = await getAll();
        return /* html */ `
            <section class="bg-white mt-5 p-5 rounded-lg">
                <h1 class="uppercase text-[20px] font-bold hover:text-[#f53d2d]">VIDEO - REVIEW SẢN PHẨM</h1>
                <div class=""><video src=""></video></div>
            </section>
            <section class="bg-white mt-5 p-5 rounded-lg">
                <h1 class="uppercase text-[20px] font-bold hover:text-[#f53d2d]">SỨC KHỎE - CÔNG NGHỆ</h1>
                <div class="grid grid-cols-4 gap-5 py-3  overflow-x-auto">
                ${data.map((posts) => `
                        <div class="">
                        <a href="">
                        <figure class="" style="width:fit-content"><img src="${posts.img}" alt=""  ></figure>
                        
                        <h3 class="font-bold text-[#4c4c4c] truncate">${posts.title}</h3>
                        </a>
                        <p class="truncate">${posts.desc}</p>
                        </div>
                
                `).join("")}
              
                
                </div>
            </section>
        `
    }
}
export default LoadPost;