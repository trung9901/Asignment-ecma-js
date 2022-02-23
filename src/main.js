import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminEditPost from "./pages/admin/news/edit";
import DashboardPage from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminNewsAddPage from "./pages/admin/news/add";
import DetailProductPage from "./pages/products/detail";
import HomePage from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin"
import ProductPage from "./pages/products";
import CartPage from "./pages/cart"
import AdminProductPage from "./pages/admin/products"
import AdminProductsAddPage from "./pages/admin/products/add";
import AdminProductsEditPage from "./pages/admin/products/edit";
import AdminUsersPage from "./pages/admin/users";
import checkoutPage from "./pages/checkout";
import AdminOdersPage from "./pages/admin/oders";
import AdminCategoryPage from "./pages/admin/category";
import AdminCategoryEditPage from "./pages/admin/category/edit";
import AdminCategoryAddPage from "./pages/admin/category/add";
import ProductByCatePage from "./pages/products/productbycate";
import AdminSlidePage from "./pages/admin/slide";
import AdminSlideAddPage from "./pages/admin/slide/add";

import SearchPage from "./pages/products/search";

const router = new Navigo("/", {
    linksSelector: "a",
    hash: true
});

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => { }, {
    before: (done) => {
        if (localStorage.getItem('user')) {
            const userId = JSON.parse(localStorage.getItem('user')).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/"
            }
        } else {
            document.location.href = "/"
        }

    }
})

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),

    //product
    "/products/details/:id": (value) => print(DetailProductPage, value.data.id),
    "/products": () => print(ProductPage),
    "/productbycate/:id": ({ data }) => print(ProductByCatePage, data.id),

    //admin
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/:id/edit": ({
        data
    }) => print(AdminEditPost, data.id),
    "/admin/news/add": () => print(AdminNewsAddPage),
    "/admin/products": () => print(AdminProductPage),
    "/admin/products/add": () => print(AdminProductsAddPage),
    "/admin/products/:id/edit": ({
        data
    }) => print(AdminProductsEditPage, data.id),
    "/admin/users": () => print(AdminUsersPage),
    "/admin/oders": () => print(AdminOdersPage),
    "/admin/category": () => print(AdminCategoryPage),
    "/admin/category/add": () => print(AdminCategoryAddPage),
    "/admin/category/:id/edit": ({
        data
    }) => print(AdminCategoryEditPage, data.id),
    "/admin/slides": () => print(AdminSlidePage),
    "/admin/slides/add": () => print(AdminSlideAddPage),
    "/admin/slides/:id/edit": ({
        data
    }) => print(AdminSlideEditPage, data.id),
    //user
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),
    "/checkout": () => print(checkoutPage),

    // search
    "/search": ({ params }) => print(SearchPage, params),

});
router.resolve();