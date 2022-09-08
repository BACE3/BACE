// import Loading from "../components/layout/Loading";
import Layout from "../components/Layout/Layout";
import FAQTitle from "../components/Elements/FAQ/FAQTitle";
import FAQArea from "../components/Elements/Home1/FAQArea";
import FAQPromotion from "../components/Elements/FAQ/FAQPromotion";



export default function Blog() {
    return (
        <>
            <Layout>
                {/* Main-Body Started */}
                <FAQTitle/>
                <FAQArea/>
                <FAQPromotion/>
                {/* Main-Body Ended */}
            </Layout>

        </>
    )
}
