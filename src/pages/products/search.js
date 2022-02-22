import Footer from "../../components/footer";
import Header from "../../components/header";
import { SearchProductByName } from "../../api/product";
const SearchPage = {
    async render({ keyword }) {
        const { data } = await SearchProductByName(keyword);
        console.log(data);
        return `
            <div class="w-auto bg-[#f4f4f4] ">
            <header class="" id="header">
              ${await Header.render()}
            </header>
            <div class="w-[1350px] mx-auto ">
              <main class="bg-white mt-5 p-5 rounded-lg">

                <article class=" ">
                  <div class="">
                    <h1 class=" pb-3 text-2xl">Các sản phẩm với từ khóa: "${keyword}"</h1>
                  </div>
                  <hr>
                  <div class="flex py-3">
                    <h1 class="font-bold">Sắp xếp: </h1>
                    <div class="">
                      <ul class="">
                        <li class="inline px-2"><label for=""><input class="mx-1" type="radio" name="" id="">Giá tăng
                            dần</label></li>
                        <li class="inline px-2"><label for=""><input class="mx-1" type="radio" name="" id="">Giá giảm
                            dần</label></li>
                        <li class="inline px-2"><label for=""><input class="mx-1" type="radio" name="" id="">Hàng mới
                            nhất</label></li>
                        <li class="inline px-2"><label for=""><input class="mx-1" type="radio" name="" id="">Hàng cũ
                            nhất</label></li>
                      </ul>
                    </div>
                  </div>
                  <hr>
                  <section>
                    <div class="">
                      <div class="py-5 grid gap-3 " style="grid-template-columns: 1fr 1fr 1fr 1fr;">
                        ${data.map(product => /* html */`
                        <div class="product-item mb-4">
                          <div class=""><a href="/#/products/details/${product.id}"><img src="${product.img}" alt=""
                                class="w-full"></a></div>
                          <div class="pt-1 py-3 pl-2 "><a href="/#/products/details/${product.id}" class="no-underline "><span
                                class="text-[#4c4c4c] font-bold hover:text-[#f53d2d]">${product.productname}</span></a></div>
                          <div class="pl-2">
                            <span class="font-bold text-[#f53d2d]">${new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'VND'
        }).format(product.price)}</span>
                            <span class="line-through text-sm pl-1">${new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'VND'
        }).format(product.price)}</span>
                          </div>
                        </div>
                        `).join("")}

                      </div>
                    </div>
                  </section>

                </article>
              </main>
            </div>
            <div class="bg-red-600 pt-1 mt-10"></div>
            ${Footer.render()}
          </div>
            `

    },
    afterRender() {
        Header.afterRender();

    }

}


export default SearchPage;