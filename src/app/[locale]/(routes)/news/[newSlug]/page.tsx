import HeaderNew from "./HeaderNew";
import NewContent from "./NewContent";
import { getBlogDetails } from "@/actions/blog-details";

interface PageProps {
  params: Promise<{
    newSlug: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { newSlug } = await params;
  const blogData = await getBlogDetails(newSlug);
  const { blog, latest_blogs } = blogData.msg_data;

  return (
    <div>
      <HeaderNew blog={blog} />
      <NewContent blog={blog} latestBlogs={latest_blogs} />
    </div>
  );
};

export default page;
