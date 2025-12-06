import HeaderNew from "./HeaderNew";
import NewContent from "./NewContent";
import { getBlogDetails } from "@/actions/blog-details";
import { getContactInfo } from "@/actions/contact";
import { Metadata } from "next";
import { createMetadata, createArticleSchema } from "@/lib/metadata";

interface PageProps {
  params: Promise<{
    newSlug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { newSlug } = await params;
  const blogData = await getBlogDetails(newSlug);
  const { blog } = blogData.msg_data;

  return createMetadata({
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.short_description,
    image: blog.images[0],
    url: `/news/${blog.slug}`,
    type: "article",
    publishedTime: blog.created_at,
  });
}

const page = async ({ params }: PageProps) => {
  const { newSlug } = await params;
  const blogData = await getBlogDetails(newSlug);
  const contactData = await getContactInfo();
  const { blog, latest_blogs } = blogData.msg_data;

  const jsonLd = createArticleSchema({
    title: blog.title,
    description: blog.meta_description || blog.short_description,
    image: blog.images[0],
    publishedTime: blog.created_at,
    url: `${process.env.API_SITE_URL}/news/${blog.slug}`,
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNew blog={blog} />
      <NewContent
        blog={blog}
        latestBlogs={latest_blogs}
        whatsappNumber={contactData.msg_data.whatsapp_number}
        phoneNumber={contactData.msg_data.phone1}
      />
    </div>
  );
};

export default page;
