// import Loading from "../components/layout/Loading";
import TeamCTA from "../components/Elements/Team/TeamCTA";
import TeamDetailsArea from "../components/Elements/TeamDetails/TeamDetailsArea";
import TeamDetailsTitle from "../components/Elements/TeamDetails/TeamDetailsTitle";
import Layout2 from "../components/Layout/Layout2";



export default function TeamDetails() {
    return (
        <>
            <Layout2>
                {/* Main-Body Started */}
                <TeamDetailsTitle/>
                <TeamDetailsArea/>
                <TeamCTA/>
                {/* Main-Body Ended */}
            </Layout2>

        </>
    )
}
