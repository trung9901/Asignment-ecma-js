// import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Contents from "../components/contents";

const HomePage = {
    async render() {
        return /* html */ `
                    <div class="w-auto bg-[#f4f4f4] ">
                        <header class="" id="header">
                        ${await Header.render()}
                        </header>
                        ${await Contents.render()}
                        <div class="bg-red-600 pt-1 mt-10"></div>
                        ${Footer.render()}
                    </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    }
};
export default HomePage;