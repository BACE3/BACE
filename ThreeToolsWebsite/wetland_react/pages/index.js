// import Loading from "../components/layout/Loading";
import HeroArea from "../components/Elements/Home1/HeroArea";
import ServicesArea from "../components/Elements/Home1/ServicesArea";
import AboutArea from "../components/Elements/Home1/AboutArea";
import FeaturesArea from "../components/Elements/Home1/FeaturesArea";
import Layout from "../components/Layout/Layout";
import Contribute from "../components/Elements/Home1/Contribute"


export default function Home() {
  return (
    <>
      {/* <Loading/> */}
      <Layout>
        {/* Main-Body Started */}        
        <HeroArea />
        <ServicesArea />
        <AboutArea />
        <FeaturesArea />
        <Contribute />

        {/* Main-Body Ended */}
      </Layout>

    </>
  )
}
