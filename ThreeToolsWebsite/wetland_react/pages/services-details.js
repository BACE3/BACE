// import Loading from "../components/layout/Loading";
import ServicesDetailsTitle from "../components/Elements/ServicesDetails/ServicesDetailsTitle";
import ServicesDetailsDetails from "../components/Elements/ServicesDetails/ServicesDetailsDetails";
import ServicesDetailsCTA from "../components/Elements/ServicesDetails/ServicesDetailsCTA";
import Layout from "../components/Layout/Layout";




export default function ServicesDetails() {
    return (
        <>
            <Layout>
                {/* Main-Body Started */}
                <ServicesDetailsTitle />
                <ServicesDetailsDetails />
                <ServicesDetailsCTA />
                {/* Main-Body Ended */}
            </Layout>
        </>
    )
}
