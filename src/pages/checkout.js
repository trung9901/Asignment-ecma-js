import Header from "../components/header";
import Footer from "../components/footer";
import $ from 'jquery';
import validate from 'jquery-validation';
import axios from "axios";
import { add } from "../api/oder";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
const checkoutPage = {
  async render() {
    let cart = [];
    let user = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user'));
    }
    return /* html */ `
        <div class="w-auto bg-[#f4f4f4] ">
        ${await Header.render()}
        <div class="w-[1350px] mx-auto">
          <div class="bg-white rounded-lg my-5">
            <div class="h-screen grid grid-cols-3 mb-20">
              <div class="lg:col-span-2 col-span-3 space-y-8 px-12 ">
                <div class="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                  <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div class="text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 sm:w-5 h-6 sm:h-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div class="text-sm font-medium ml-3">Checkout</div>
                  </div>
                  <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Hoàn thành chi tiết thanh toán và
                    giao hàng
                    của bạn bên dưới.</div>
                  <div
                    class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                      </path>
                    </svg>
                  </div>
                </div>
                <div class="rounded-md">
                  <form id="payment-form" action="">
                    <section>
                      <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">THÔNG TIN HÓA ĐƠN & VẬN
                        CHUYỂN </h2>
                      <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
  
                        <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                          <span class="text-right px-2">Họ tên:</span>
                          <input name="name" id="name" type="text" class="focus:outline-none px-3" placeholder="Họ và tên"
                            value="${localStorage.getItem('user') ? user.username : ''}" required>
                        </label>
                        <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                          <span class="text-right px-2">Email:</span>
                          <input name="email" id="email" type="email" class="focus:outline-none px-3"
                            placeholder="@example.com" value="${localStorage.getItem('user') ? user.email : ''}" required>
                        </label>
                        <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span class="text-right px-2">Sđt:</span>
                        <input name="phone" id="phone" type="" class="focus:outline-none px-3"
                          placeholder="098000000" required>
                      </label>
                        <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                          <span class="text-right px-2">Địa chỉ:</span>
                          <input name="address" id="address" class="focus:outline-none px-3"
                            placeholder="Vạn phúc - Hà Đông" required>
                        </label>
                        <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                          <span class="text-right px-2">Thành Phố:</span>
                          <input name="city" id="city" class="focus:outline-none px-3" placeholder="Hà Nội" required>
                        </label>
                        <label class="inline-flex w-2/4 border-gray-200 py-3">
                          <span class="text-right px-2">Ghi chú:</span>
                          <textarea name="note" id="note" rows="5"
                            class="border border-gray-300 rounded w-80 p-1"></textarea>
                        </label>
  
                      </fieldset>
  
                    </section>
                    <div class="mt-10"><button type="submit" 
                    class=" px-4 py-3 rounded-lg  text-red-500 border border-red-600  w-full text-xl font-semibold hover:bg-red-600 hover:text-white">
                    Thanh toán <span id="sum-price-output"></span>
                  </button></div>
                    
                  </form>
                </div>
              </div>
              <div class="col-span-1 bg-white lg:block hidden mr-10 mb-10">
                <h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">Danh sách đơn hàng</h1>
                <ul class="py-6 border-b space-y-6 px-8">
  
                ${cart.map(item => `
                  <li class="grid grid-cols-6 gap-2 border-b-1">
                    <div class="col-span-1 self-center">
                      <img src=" ${item.img} " alt="Product" class="rounded w-full" id="img-oder">
                    </div>
                    <div class="flex flex-col col-span-3 pt-2">
                      <span class="text-gray-600 text-md font-semi-bold"> ${item.productname} </span>
                      <span class="text-gray-400 text-sm inline-block pt-2">Red Headphone</span>
                    </div>
                    <div class="col-span-2 pt-3">
                      <div class="flex items-center space-x-2 text-sm justify-between">
                        <span class="text-gray-400">${item.quantity} x ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(item.price)}</span>
                        <span class="text-red-500 font-semibold inline-block">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format((item.price) * (item.quantity))} </span>
                      </div>
                    </div>
                  </li>
                `).join('')}
  
  
                </ul>
                <div class="px-8 border-b">
                  <div class="flex justify-between py-4 text-gray-600">
                    <span>Mã giảm giá</span>
                    <div class=""><input type="text" class="border rounded border-red-500 p-1"
                        placeholder="Nhập mã giảm giá"></div>
                  </div>
                  <div class="flex justify-between py-4 text-gray-600">
                    <span>Vận chuyển</span>
                    <span class="font-semibold text-red-500">Miễn phí</span>
                  </div>
                </div>
                <div class="font-semibold text-xl px-8 flex justify-between py-8 text-white bg-yellow-500 rounded-lg">
                  <span>Tổng tiền</span>
                  <span id="sum-price-output2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="bg-red-600 pt-1 mt-10"></div>
        ${Footer.render()}
      </div>
        `
  },
  afterRender() {
    Header.afterRender();
    // const user = localStorage.getItem('user');
    // const name = document.querySelector('#name').value;
    // const email = document.querySelector('#email').value;
    // const address = document.querySelector('#address').value;
    // const city = document.querySelector('#city').value;
    // const phone = document.querySelector('#phone').value;

    const cart = JSON.parse(localStorage.getItem('cart'));
    const output = document.querySelector('#sum-price-output');
    const output2 = document.querySelector('#sum-price-output2');
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      let percent = cart[i].price * cart[i].quantity;
      sum += percent
      output.innerHTML = sum.toLocaleString('de-DE') + '₫';
      output2.innerHTML = sum.toLocaleString('de-DE') + '₫';
    }
    //------------------------------------------------------------------------------
    const formAdd = $('#payment-form');
    formAdd.validate({
      submitHandler: () => {

        async function addOder() {
          add({
            "customername": document.querySelector('#name').value,
            "phone": document.querySelector('#phone').value,
            "email": document.querySelector('#email').value,
            "address": document.querySelector('#address').value,
            "city": document.querySelector('#city').value,
            "oderprice": output.innerHTML,
          }).then(async () => {
            localStorage.removeItem('cart');
            toastr.success("Bạn đã thêm vào giỏ hàng thành công")
            setTimeout(document.location.href = "/#/", 1000)
          })

        }
        addOder()
      }
    })
  }
}

export default checkoutPage;