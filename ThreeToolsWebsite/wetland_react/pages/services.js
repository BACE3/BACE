
// import Loading from "../components/layout/Loading";
import ServicesTitleArea from "../components/Elements/Services/ServicesTitleArea";
import ServicesServicesArea from "../components/Elements/Services/ServicesServicesArea";
import ServicesFeaturesArea from "../components/Elements/Services/ServicesFeaturesArea";
import ServicesCTAArea from "../components/Elements/Services/ServicesCTAArea";
import Layout from "../components/Layout/Layout";




export default function Services() {
    return (
        <>
            <Layout>
                {/* Main-Body Started */}
                <ServicesTitleArea />
                <ServicesServicesArea />
                <ServicesFeaturesArea />
                <ServicesCTAArea />
                {/* Main-Body Ended */}
            </Layout>
        </>
    )
}
