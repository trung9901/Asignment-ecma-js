import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    async render() {
        return /* html */ `
                <div class="w-auto bg-[#f4f4f4] ">
                ${await Header.render()}
                <div class="w-[1350px] mx-auto ">
                <div class="bg-white my-5 border rounded-lg p-5"> 
                    <div><h1 class="text-red-600 text-2xl font-bold">Giới thiệu</h1> </div>
                    <div class="mt-5">
                        <h1 class="text-3xl text-gray-700">MewMall - GÌ CŨNG CÓ, MUA HẾT Ở MewMall</h1>
                        <p class="text-gray-600 py-5">MewMall - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! MewMall là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, Việt Nam, Singapore, Malaysia, Indonesia, Thái Lan, Philipin, Đài loan và Brazil. Với sự đảm bảo của MewMall, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!</p>
                        <p class="text-gray-600 uppercase text-xl">MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN</p>
                        <p class="text-gray-600 py-5">Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì MewMall.vn là một sự lựa chọn tuyệt vời dành cho bạn. Bản chất của MewMall là một social E-commerce platform - nền tảng trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho phép người mua và người bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc mua bán trên MewMall trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, MewMall Mall chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, MewMall Blog - trang blog thông tin chính thức của MewMall - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.</p>
                        <p class="text-gray-600 pb-5">Đến với MewMall, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tự tạo chương trình khuyến mãi trên MewMall để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại MewMall Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.</p>
                    </div>
                </div>
                </div>
                <div class="bg-red-600 pt-1 mt-10"></div>
                ${Footer.render()}
                </div>
        `;
    },
};
export default AboutPage;