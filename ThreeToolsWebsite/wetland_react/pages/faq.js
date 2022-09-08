// import Loading from "../components/layout/Loading";
import Layout2 from "../components/Layout/Layout2";
import FAQTitle from "../components/Elements/FAQ/FAQTitle";
import FAQArea2 from "../components/Elements/Home2/FAQArea2";
import FAQPromotion from "../components/Elements/FAQ/FAQPromotion";



export default function Blog() {
    return (
        <>
            <Layout2>
                {/* Main-Body Started */}
                <FAQTitle/>
                <FAQArea2/>
                <FAQPromotion/>
                {/* Main-Body Ended */}
            </Layout2>

        </>
    )
}
