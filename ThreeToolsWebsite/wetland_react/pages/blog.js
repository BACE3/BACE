// import Loading from "../components/layout/Loading";
import BlogTitleArea from "../components/Elements/Blog/BlogTitleArea";
import BlogBlogArea from "../components/Elements/Blog/BlogBlogArea";
import Layout from "../components/Layout/Layout";



export default function Blog() {
    return (
        <>
            <Layout>
                {/* Main-Body Started */}
                <BlogTitleArea />
                <BlogBlogArea />
                {/* Main-Body Ended */}
            </Layout>

        </>
    )
}
