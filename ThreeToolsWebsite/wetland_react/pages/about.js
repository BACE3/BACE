// import Loading from "../components/layout/Loading";
import AboutPageTitle from "../components/Elements/About/AboutPageTitle";
import AboutAboutArea from "../components/Elements/About/AboutAboutArea";
import AboutFAQArea from "../components/Elements/About/AboutFAQArea";
import Layout from "../components/Layout/Layout";

export default function About() {
    return (
        <>
            <Layout>
                {/* Main-Body Started */}
                <AboutPageTitle />
                <AboutAboutArea />
                <AboutFAQArea />
                {/* Main-Body Ended */}
            </Layout>
        </>
    )
}
