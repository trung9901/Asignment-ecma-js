import { getAll } from '../api/category';

const Category = {
    async render(){
        const { data } = await getAll();
        return /* html */`
                <section class="menu-cate rounded-lg bg-white mt-5 p-5">
                <h1 class="uppercase font-bold text-[#4c4c4c] text-[20px]">Danh mục nổi bật</h1>
                <div class="flex gap-5">
                <div class="pt-8 pb-3 flex gap-x-12">
                    ${data.map((category)=>`
                    <a href="" class="">
                    <div class="flex justify-center"><img src="${category.img}" alt="" class="rounded-[20px]">
                    </div>

                    <div class="flex justify-center pt-2"><span class="text-[#212529] text-[15px] hover:text-[#f53d2d] ">${category.title}</span></div>

                    </a>
                    `).join('')}

                </div>

                </div>

            </section>
        `
    }
}
export default Category;