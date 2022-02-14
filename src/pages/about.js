import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return /* html */`
                <div class="w-auto bg-[#f4f4f4] ">
                ${Header.render()}
                <h1>AboutPage</h1>
                <div class="bg-red-600 pt-1 mt-10"></div>
                ${Footer.render()}
                </div>
        `;
    },
};
export default AboutPage;