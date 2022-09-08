// import Loading from "../components/layout/Loading";
import TeamCTA from "../components/Elements/Team/TeamCTA";
import TeamDetailsArea from "../components/Elements/TeamDetails/TeamDetailsArea";
import TeamDetailsTitle from "../components/Elements/TeamDetails/TeamDetailsTitle";
import Layout from "../components/Layout/Layout";



export default function TeamDetails() {
    return (
        <>
            <Layout>
                {/* Main-Body Started */}
                <TeamDetailsTitle/>
                <TeamDetailsArea/>
                <TeamCTA/>
                {/* Main-Body Ended */}
            </Layout>

        </>
    )
}
