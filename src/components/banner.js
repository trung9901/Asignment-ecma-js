import { getAll } from '../api/blog';

const Banner = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="banner  bg-white mt-5 rounded-lg grid grid-cols-12 ">
            <div class="col-span-9"><img src="https://picsum.photos/1000/400" alt="" class="rounded-l-lg"></div>
            <div class="news col-span-3 ">
            <div class="overflow-auto">
                <div class="b_sale_blog pl-3 pr-3">
                <h3 class="title uppercase font-bold position-relative m-0 pt-3 pb-2 border-bottom mb-3 ">
                    <a class="position-relative d-flex align-items-center no-underline text-[#212529] text-[20px] hover:text-[#f53d2d]"
                    href="tin-khuyen-mai" title="Tin khuyến mãi">

                    Tin khuyến mãi
                    <span class="d-inline-block ring-container ml-2 position-relative">
                        <span class="d-inline-block ringring position-absolute"></span>
                        <span class="d-inline-block circle position-absolute"></span>
                    </span>
                    </a>
                </h3>
                <div class="cont_sale_blog mb-3 mb-lg-0  ">
                    ${data.map((blog) => /* html */ `
                    <div class="blog-item-list clearfix mb-2 mt-2 flex  no-underline text-[#212529] ">
                    <a href="/tang-ngay-voucher-300k-khi-mua-hang-online-tai-mew-mall"
                        class="no-underline text-[#212529] " title="Tặng ngay voucher 300k online tại Mew Mall">
                        <span class="rounded ">
                        <img src="${blog.img} " alt="" class="rounded">
                        </span>
                    </a>
                    <div class=" pl-2 pr-2">
                        <h3 class="font-bold mb-1 text-sm">
                        <a class="line_2" href="/tang-ngay-voucher-300k-khi-mua-hang-online-tai-mew-mall"
                            title="Tặng ngay voucher 300k - Khi mua hàng online tại Mew Mall">${blog.title}</a>
                        </h3>
                        <small>${blog.date}</small>


                    </div>
                    </div>
                    
                    `).join('')}

                    
                
                </div>
                </div>
            </div>
            </div>

        </div>
        `
    }
}
export default Banner;