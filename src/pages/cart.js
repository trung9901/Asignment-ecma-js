import {
  reRender
} from "../utils/rerender";
import {
  getAll
} from '../api/product'
import {
  decreaseItemInCart,
  increaseItemInCart,
  removeItemInCart,
} from "../utils/cart";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import Footer from "../components/footer";
import Header from "../components/header";
import $ from 'jquery';
import validate from "jquery-validation"

const CartPage = {
  async render() {
    let cart = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    const {
      data
    } = await getAll();
    return `
                <div class="w-auto bg-[#f4f4f4] ">
                <header class="" id="header">
                ${await Header.render()}
                </header>
                <div class="w-[1350px] mx-auto ">
                <main class="bg-white rounded-lg mt-5 p-5 grid grid-cols-12 gap-5">
                  <section class="col-span-8">
                    <!--  -->
                    ${cart.map(item => `
                    <div class="border rounded-lg flex justify-between p-5 mb-5">
                      <div class="flex">
                        <figure class="w-20"><img src="${item.img}" alt=""></figure>
                        <div class="px-5">
                          <h3>${item.productname}</h3>
                          
                          <span class="text-red-600 mt-3">Giá:  ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format((item.price) - (((item.price) * (item.discount)) / 100))}</span>
                          <div class="flex
                           mt-3">
                            <button data-id="${item.id}" class="btn btn-decrease px-2 py-1 border rounded-l-lg"><i
                                class="fa-solid fa-minus"></i></button>
                              
                            <input type="number" value="${item.quantity}" class="border-y text-center w-20" id="quantity" max="${data.quantity}" name="quantity" required />
                            <button data-id="${item.id}" class="btn btn-increase px-2 py-1 border rounded-r-lg "><i
                                class="fa-solid fa-plus"></i></button>
                          </div>
        
                        </div>
                      </div>
                      <div class="">
                        <span class="block font-bold text-red-600 text-lg" id="sum-price" >${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(((item.price) - (((item.price) * (item.discount)) / 100)) * (item.quantity))} <input id="sum-price-input" type="hidden" name="" value="${((item.price) - (((item.price) * (item.discount)) / 100)) * (item.quantity)}"></span>
                        <button data-id="${item.id}"
                          class="btn btn-remove block  float-right mt-8 border border-red-600 rounded px-3 py-2 text-sm text-red-500 hover:bg-red-600 hover:text-white">xóa</button>
                      </div>
                    </div>
                    `).join("")}
                    <!--  -->
                  </section>
                  <section class="col-span-4">
                    <div class="bg-yellow-400 border-0 rounded-lg p-5 flex justify-between ">
                      <span class="text-white font-bold uppercase text-xl align-middle">TỔNG:</span>
                      <h1 class="text-white font-bold text-2xl align-middle" id="sum-price-output"> ₫</h1>
                    </div>
                    <div>
                    <a href="/#/checkout"><button class="my-6 py-2 w-full border rounded-lg border-red-600 text-center hover:bg-red-600 hover:text-white text-red-600 uppercase font-bold">thanh toán</button></a> 
                      
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
                </main>
              </div>
                <div class="bg-red-600 pt-1 mt-10"></div>
                ${Footer.render()}
                </div>
        `
  },
  afterRender() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const output = document.querySelector('#sum-price-output');
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      let percent = (cart[i].price - ((cart[i].price * cart[i].discount) / 100)) * cart[i].quantity;
      sum += percent
      output.innerHTML = sum.toLocaleString('de-DE') + '₫'
    }
    console.log(cart.length)
    // ---------------------    
    Header.afterRender();

    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('btn-increase')) {
          increaseItemInCart(id, () => reRender(CartPage, "#app"))
        } else if (btn.classList.contains('btn-decrease')) {
          decreaseItemInCart(id, () => reRender(CartPage, "#app"))
        } else {
          removeItemInCart(id, () => {
            reRender(CartPage, "#app")
            toastr.success("Bạn đã xóa sản phẩm thành công");
            if (cart.length === 1) {
              localStorage.removeItem('cart');
              document.location.href = "/#/"
            }

          })
        }
      })
    })
  }
}
export default CartPage;