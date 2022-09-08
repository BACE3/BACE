// import Loading from "../components/layout/Loading";
import TeamArea from "../components/Elements/Team/TeamArea";
import TeamCTA from "../components/Elements/Team/TeamCTA";
import TeamTitle from "../components/Elements/Team/TeamTitle";
import Layout from "../components/Layout/Layout";



export default function Team() {
    return (
        <>
            <Layout>
                {/* Main-Body Started */}
                <TeamTitle/>
                <TeamArea/>
                <TeamCTA/>
                {/* Main-Body Ended */}
            </Layout>

        </>
    )
}
