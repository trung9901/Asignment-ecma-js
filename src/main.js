import Navigo from "navigo";
import AdminEditPost from "./pages/admin/news/edit";
import AboutPage from "./pages/about";
import DashboardPage from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminNewsAddPage from "./pages/admin/news/add";
import DetailNewsPage from "./pages/detail";
import HomePage from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin"


const router = new Navigo("/", {
    linksSelector: "a"
});

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
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
    "/products/:id": (value) => print(DetailNewsPage, value.data.id),

    "/admin/dashboard": () => print(DashboardPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/:id/edit": ({
        data
    }) => print(AdminEditPost, data.id),
    "/admin/news/add": () => print(AdminNewsAddPage),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
});
router.resolve();