import Header from "../../components/header"
import Footer from "../../components/footer";
import getAll from "../../api/product"

const ProductPage = {
  async render() {
    const {
      data
    } = await getAll();
    return /* html */ `
                  <div class="w-auto bg-[#f4f4f4] ">
                  <header class="" id="header">
                      ${await Header.render()}
                  </header>
                  <div class="w-[1350px] mx-auto ">
                  <main class="grid grid-cols-12 bg-white mt-5 p-5 rounded-lg">
                    <aside class="col-span-3 ">
                      <h1 class="uppercase font-bold mb-3">Bộ lọc sản phẩm</h1>
                      <section>
                        <h4 class="font-bold mb-1 ">Thương hiệu</h4>

                        <ul class="filter-vendor list-unstyled m-0 overscroll-contain ">
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 amando" data-filter="amando"
                              for="filter-amando">
                              <input type="checkbox" id="filter-amando" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="Amando" value="(Amando)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Amando
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 baseus" data-filter="baseus"
                              for="filter-baseus">
                              <input type="checkbox" id="filter-baseus" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="Baseus" value="(Baseus)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Baseus
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 blackweb" data-filter="blackweb"
                              for="filter-blackweb">
                              <input type="checkbox" id="filter-blackweb" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="BLACKWEB" value="(BLACKWEB)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              BLACKWEB
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 canada" data-filter="canada"
                              for="filter-canada">
                              <input type="checkbox" id="filter-canada" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="Canada" value="(Canada)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Canada
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 converse" data-filter="converse"
                              for="filter-converse">
                              <input type="checkbox" id="filter-converse" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="Converse" value="(Converse)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Converse
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 jbl" data-filter="jbl" for="filter-jbl">
                              <input type="checkbox" id="filter-jbl" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="JBL" value="(JBL)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              JBL
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 jno-furniture" data-filter="jno furniture"
                              for="filter-jno-furniture">
                              <input type="checkbox" id="filter-jno-furniture" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="Jno Furniture" value="(Jno Furniture)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Jno Furniture
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 kaiw" data-filter="kaiw" for="filter-kaiw">
                              <input type="checkbox" id="filter-kaiw" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="Kaiw" value="(Kaiw)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Kaiw
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 lasiss" data-filter="lasiss"
                              for="filter-lasiss">
                              <input type="checkbox" id="filter-lasiss" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="Lasiss" value="(Lasiss)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Lasiss
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 lio" data-filter="lio" for="filter-lio">
                              <input type="checkbox" id="filter-lio" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="LiO" value="(LiO)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              LiO
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box  ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0 mew-fashion" data-filter="mew fashion"
                              for="filter-mew-fashion">
                              <input type="checkbox" id="filter-mew-fashion" class="d-none" onchange="toggleFilter(this)"
                                data-group="Hãng" data-field="vendor" data-text="Mew Fashion" value="(Mew Fashion)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Mew Fashion
                            </label>
                          </li>

                        </ul>

                      </section>

                      <section>
                        <h1 class="font-bold mt-3 mb-1">Lọc giá</h1>
                        <ul class="list-unstyled m-0">

                          <li class="filter-item filter-item--check-box ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" for="filter-duoi-100-000d">
                              <input type="checkbox" id="filter-duoi-100-000d" class="d-none" onchange="toggleFilter(this);"
                                data-group="Khoảng giá" data-field="price_min" data-text="Dưới 100.000đ" value="(<100000)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i> Giá dưới 100.000đ
                            </label>
                          </li>

                          <li class="filter-item filter-item--check-box ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" for="filter-100-000d-200-000d">
                              <input type="checkbox" id="filter-100-000d-200-000d" class="d-none" onchange="toggleFilter(this)"
                                data-group="Khoảng giá" data-field="price_min" data-text="100.000đ - 200.000đ"
                                value="(>99999 AND <200001)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i> 100.000đ - 200.000đ
                            </label>
                          </li>

                          <li class="filter-item filter-item--check-box ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" for="filter-200-000d-500-000d">
                              <input type="checkbox" id="filter-200-000d-500-000d" class="d-none" onchange="toggleFilter(this)"
                                data-group="Khoảng giá" data-field="price_min" data-text="200.000đ - 500.000đ"
                                value="(>199999 AND <500001)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i> 200.000đ - 500.000đ
                            </label>
                          </li>

                          <li class="filter-item filter-item--check-box ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" for="filter-500-000d-1000000d">
                              <input type="checkbox" id="filter-500-000d-1000000d" class="d-none" onchange="toggleFilter(this)"
                                data-group="Khoảng giá" data-field="price_min" data-text="500.000đ - 1000000đ"
                                value="(>499999 AND <1000001)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i> 500.000đ - 1000000đ
                            </label>
                          </li>

                          <li class="filter-item filter-item--check-box ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" for="filter-1000000d-2000000d">
                              <input type="checkbox" id="filter-1000000d-2000000d" class="d-none" onchange="toggleFilter(this)"
                                data-group="Khoảng giá" data-field="price_min" data-text="1000000đ - 2000000đ"
                                value="(>999999 AND <2000001)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i> 1000000đ - 2000000đ
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box ">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" for="filter-tren2000000d">
                              <input type="checkbox" id="filter-tren2000000d" class="d-none" onchange="toggleFilter(this)"
                                data-group="Khoảng giá" data-field="price_min" data-text="Trên 2000000đ" value="(>2000000)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i> Giá trên 2000000đ
                            </label>
                          </li>


                        </ul>
                      </section>

                      <section>
                        <h1 class="font-bold mt-3 mb-1">Danh mục</h1>
                        <ul class="filter-type list-unstyled m-0">

                          <li class="filter-item filter-item--check-box">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" data-filter="áo thun" for="filter-ao-thun">
                              <input type="checkbox" id="filter-ao-thun" class="d-none" onchange="toggleFilter(this)"
                                data-group="Loại" data-field="product_type" data-text="Áo thun" value="(Áo thun)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Áo thun
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" data-filter="bàn bệt" for="filter-ban-bet">
                              <input type="checkbox" id="filter-ban-bet" class="d-none" onchange="toggleFilter(this)"
                                data-group="Loại" data-field="product_type" data-text="Bàn bệt" value="(Bàn bệt)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Bàn bệt
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" data-filter="bàn kệ" for="filter-ban-ke">
                              <input type="checkbox" id="filter-ban-ke" class="d-none" onchange="toggleFilter(this)"
                                data-group="Loại" data-field="product_type" data-text="Bàn kệ" value="(Bàn kệ)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Bàn kệ
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" data-filter="cáp sạc" for="filter-cap-sac">
                              <input type="checkbox" id="filter-cap-sac" class="d-none" onchange="toggleFilter(this)"
                                data-group="Loại" data-field="product_type" data-text="Cáp sạc" value="(Cáp sạc)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Cáp sạc
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" data-filter="để bàn" for="filter-de-ban">
                              <input type="checkbox" id="filter-de-ban" class="d-none" onchange="toggleFilter(this)"
                                data-group="Loại" data-field="product_type" data-text="Để bàn" value="(Để bàn)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Để bàn
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" data-filter="filter camera"
                              for="filter-filter-camera">
                              <input type="checkbox" id="filter-filter-camera" class="d-none" onchange="toggleFilter(this)"
                                data-group="Loại" data-field="product_type" data-text="Filter Camera" value="(Filter Camera)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Filter Camera
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" data-filter="giá treo quần áo"
                              for="filter-gia-treo-quan-ao">
                              <input type="checkbox" id="filter-gia-treo-quan-ao" class="d-none" onchange="toggleFilter(this)"
                                data-group="Loại" data-field="product_type" data-text="Giá treo quần áo"
                                value="(Giá treo quần áo)" data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Giá treo quần áo
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" data-filter="giày vải" for="filter-giay-vai">
                              <input type="checkbox" id="filter-giay-vai" class="d-none" onchange="toggleFilter(this)"
                                data-group="Loại" data-field="product_type" data-text="Giày vải" value="(Giày vải)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Giày vải
                            </label>
                          </li>
                          <li class="filter-item filter-item--check-box">
                            <label class="d-flex align-items-baseline pt-1 pb-1 m-0" data-filter="gỗ đứng" for="filter-go-dung">
                              <input type="checkbox" id="filter-go-dung" class="d-none" onchange="toggleFilter(this)"
                                data-group="Loại" data-field="product_type" data-text="Gỗ đứng" value="(Gỗ đứng)"
                                data-operator="OR">
                              <i class="fa position-relative mr-2"></i>
                              Gỗ đứng
                            </label>
                          </li>

                        </ul>
                      </section>
                    </aside>
                    <article class="col-span-9 ">
                      <div class="">
                        <h1 class="uppercase pb-3 font-bold">Tất cả sản phẩm</h1>
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
                          ${data.map((products) => /* html */`
                            <div class="product-item  bg-slate-400">
                              <div class=""><a href="/products/details/${products.id}"><img src="${products.img}" alt=""
                                    class=""></a></div>
                              <div class="pt-1 py-3 "><a href="/products/details/${products.id}" class="no-underline "><span
                                    class="text-[#4c4c4c] font-bold hover:text-[#f53d2d]">${products.productname}</span></a></div>
                              <div class="">
                                <span class="font-bold text-[#f53d2d]">${products.newprice}₫</span>
                                <span class="line-through text-sm pl-1">${products.oldprice}₫</span>
                                <button class="ml-5 text-2xl"><i class="fa fa-cart-plus"></i></button>
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
export default ProductPage;