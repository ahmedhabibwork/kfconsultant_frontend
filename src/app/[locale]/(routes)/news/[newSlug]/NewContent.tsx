import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blogDetailesType";
import NewsCard from "../components/NewsCard";
import ShareButtons from "@/components/ShareButtons";

interface NewContentProps {
  blog: BlogPost;
  latestBlogs: BlogPost[];
  whatsappNumber?: string;
  phoneNumber?: string;
}

const NewContent = ({
  blog,
  latestBlogs,
  whatsappNumber,
  phoneNumber,
}: NewContentProps) => {
  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const shareUrl = `${process.env.API_SITE_URL}/news/${blog.slug}`;
  const shareTitle = encodeURIComponent(blog.title);

  return (
    <>
      <div
        className="px-6 pt-[64px] max-w-[1114px] mx-auto"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <p className="text-[#616161] leading-[36.80px] text-sm">
          {formattedDate}
        </p>
        <h5 className="text-primary text-[26px] font-bold mb-4 max-md:text-lg">
          {blog.title}
        </h5>
        <p className="text-primary text-[24px] mb-[32px] max-md:text-sm">
          {blog.short_description}
        </p>
        <ShareButtons
          shareUrl={shareUrl}
          shareTitle={shareTitle}
          whatsappNumber={whatsappNumber}
          phoneNumber={phoneNumber}
        />
        {blog.images.length > 0 && (
          <div className="relative w-3/4 max-lg:w-full h-[500px] max-md:h-auto mt-12 aspect-square">
            <Image
              alt={blog.title}
              src={blog.images[0]}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div
          className="text-primary text-[13px] mt-8 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>

      {/* Latest Blogs Section */}
      {latestBlogs.length > 0 && (
        <div className="px-6 pt-[64px] pb-12 max-w-[1114px] mx-auto">
          <h2 className="text-primary text-2xl font-bold mb-8">Other News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px]">
            {latestBlogs.map((latestBlog) => (
              <NewsCard
                key={latestBlog.id}
                id={latestBlog.slug}
                title={latestBlog.title}
                date={new Date(latestBlog.created_at).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
                description={latestBlog.short_description}
                image={latestBlog.images[0] || "/newsCard.webp"}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NewContent;
