import {
    reRender
} from '../utils/rerender';
const Header = {
    async render() {
        return /* html */ `
                
                <div class="position-fixed  background-color ">
                    <div class="w-[1350px] position-relative mx-auto  grid grid-cols-7 pt-2">
                    <figure class="col-span-1 ">
                        <img alt="Mew Mall" src="//bizweb.dktcdn.net/100/422/614/themes/813952/assets/logo.png?1640847904386"
                        data-src="//bizweb.dktcdn.net/100/422/614/themes/813952/assets/logo.png?1640847904386"
                        class="img-fluid lazy loaded" width="100%">
                    </figure>
                    <div class="col-span-6 ml-10">
                        <div class="flex justify-around ">
                            <div class="flex  ">
                                <input type="text" class="px-4 py-2 w-[500px] h-[45px] rounded-l-lg " placeholder="Tìm kiếm...">
                                <button class="flex items-center justify-center px-4 bg-white rounded-r-lg  ">
                                <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                </svg>
                                </button>
                            </div>

                        <div class="flex pt-2">
                            <div class="text-white font-bold " id="check-user">${localStorage.getItem('user') ? `<span class=" hover:text-[#fdbf08]" id="account-email"></span><span class="mx-1">/</span><span id="logout" class=" hover:text-[#fdbf08]"> Đăng xuất</span>`: `<a href="/signin" class=" hover:text-[#fdbf08]">Đăng nhập</a><span class="mx-1">/</span><a href="/signup" class=" hover:text-[#fdbf08]">Đăng ký</a>`}</div>                      
                            <span class="text-white font-bold mx-4">|</span>
                            <div class="text-white font-bold hover:text-[#fdbf08]"><a href="/cart" >Giỏ hàng</a></div>
                        </div>
                        </div>
                        <div class="mt-5 mb-5">
                        <ul id="menu_pc" class="flex list-none">
                            <li class="nav-item ">
                            <a href="/" title="Trang chủ" class="font-bold pr-5 no-underline text-white hover:text-[#fdbf08] ">
                                Trang chủ
                            </a>
                            </li>
                            <li class=" nav-item">
                            <a href="/about" title="Giới thiệu"
                                class="font-bold p-5 no-underline text-white pl-lg-3 hover:text-[#fdbf08] ">
                                Giới thiệu
                            </a>
                            </li>
                            <li class=" ">
                            <a href="/products" title="Sản phẩm"
                                class="font-bold p-5 no-underline text-white pl-lg-3 hover:text-[#fdbf08] ">
                                Sản phẩm
                            </a>
                            </li>
                            <li class=" ">
                            <a href="/tin-tuc" title="Tin tức"
                                class="font-bold p-5 no-underline text-white pl-lg-3 hover:text-[#fdbf08] ">
                                Tin tức
                            </a>
                            </li>
                            <li class=" ">
                            <a href="/tuyen-dung" title="Tuyển dụng"
                                class="font-bold p-5 no-underline text-white pl-lg-3 hover:text-[#fdbf08] ">
                                Khuyến mãi hot
                            </a>
                            </li>
                            <li class=" ">
                            <a href="/lien-he" title="Liên hệ"
                                class="font-bold p-5 no-underline text-white pl-lg-3 hover:text-[#fdbf08] ">
                                Liên hệ
                            </a>
                            </li>
                            
                            <li class=" " id="dashboard">
                            
                            </li>
                        </ul>

                        </div>
                    </div>
                    </div>
                </div>
               
        `;

    },
    afterRender() {
        const dashboard = document.querySelector('#dashboard')
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user')).id === 1) {
                dashboard.innerHTML = '<a href="/admin/dashboard" title="Liên hệ" target="_blank" class="font-bold p-5 no-underline text-white pl-lg-3 hover:text-[#fdbf08] "> dashboard</a>';
            }
        } else {
            dashboard.innerHTML = '';
        }
        const accountEmail = document.querySelector('#account-email');
        if (accountEmail) {
            accountEmail.innerHTML = JSON.parse(localStorage.getItem('user')).email;
        }
        const logout = document.querySelector('#logout');
        if (logout) {
            logout.addEventListener('click', function () {
                localStorage.removeItem('user');
                reRender(Header, '#header');
            })

        }

    }

}

export default Header;