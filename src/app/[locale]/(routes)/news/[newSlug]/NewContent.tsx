import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blogDetailesType";
import NewsCard from "../components/NewsCard";

interface NewContentProps {
  blog: BlogPost;
  latestBlogs: BlogPost[];
}

const NewContent = ({ blog, latestBlogs }: NewContentProps) => {
  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const shareUrl = `https://dma-mea.com/news/${blog.slug}`;
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
        <h5 className="text-primary text-lg font-bold mb-4 max-md:text-lg">
          {blog.title}
        </h5>
        <p className="text-primary text-[13px] mb-[32px] max-md:text-sm">
          {blog.short_description}
        </p>
        <div className="flex gap-3 flex-wrap flex-col">
          <p className="text-primary text-lg font-bold uppercase max-md:text-sm">
            Share to
          </p>
          <div id="share" className="flex items-center gap-4">
            <Link
              target="_blank"
              className="bg-primary p-1.5 rounded-full flex items-center justify-center"
              aria-label="Facebook"
              href={`https://www.facebook.com/share_channel/?type=reshare&link=${shareUrl}&source_surface=external_reshare&display&quote=${shareTitle}&hashtag=${shareTitle}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M14.5086 2.87939C13.282 2.87939 12.1056 3.36667 11.2382 4.23403C10.3709 5.10138 9.88359 6.27777 9.88359 7.50439V10.0794H7.40859C7.28459 10.0794 7.18359 10.1794 7.18359 10.3044V13.7044C7.18359 13.8284 7.28359 13.9294 7.40859 13.9294H9.88359V20.9044C9.88359 21.0284 9.98359 21.1294 10.1086 21.1294H13.5086C13.6326 21.1294 13.7336 21.0294 13.7336 20.9044V13.9294H16.2306C16.3336 13.9294 16.4236 13.8594 16.4486 13.7594L17.2986 10.3594C17.307 10.3262 17.3076 10.2916 17.3006 10.2581C17.2936 10.2246 17.279 10.1932 17.258 10.1662C17.2369 10.1392 17.21 10.1173 17.1793 10.1023C17.1486 10.0873 17.1148 10.0794 17.0806 10.0794H13.7336V7.50439C13.7336 7.40262 13.7536 7.30184 13.7926 7.20781C13.8315 7.11379 13.8886 7.02835 13.9606 6.95639C14.0326 6.88442 14.118 6.82734 14.212 6.78839C14.306 6.74944 14.4068 6.72939 14.5086 6.72939H17.1086C17.2326 6.72939 17.3336 6.62939 17.3336 6.50439V3.10439C17.3336 2.98039 17.2336 2.87939 17.1086 2.87939H14.5086Z"
                  className="fill-white group-hover/share:fill-white"
                ></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              className="bg-primary p-1.5 rounded-full flex items-center justify-center"
              aria-label="LinkedIn"
              href={`https://www.linkedin.com/feed/?shareActive=true&shareUrl=${shareUrl}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M4.50587 2.65974C4.50559 3.21634 4.28422 3.75002 3.89045 4.1434C3.49668 4.53677 2.96277 4.75761 2.40618 4.75733C1.84959 4.75705 1.3159 4.53568 0.922528 4.14191C0.529154 3.74815 0.308316 3.21424 0.308594 2.65765C0.308872 2.10105 0.530245 1.56737 0.924012 1.17399C1.31778 0.780619 1.85169 0.559781 2.40828 0.560059C2.96487 0.560337 3.49856 0.78171 3.89193 1.17548C4.28531 1.56924 4.50614 2.10315 4.50587 2.65974ZM4.56883 6.31137H0.371553V19.4488H4.56883V6.31137ZM11.2005 6.31137H7.02423V19.4488H11.1585V12.5548C11.1585 8.71431 16.1638 8.35754 16.1638 12.5548V19.4488H20.3086V11.1277C20.3086 4.65345 12.9004 4.89479 11.1585 8.07422L11.2005 6.31137Z"
                  className="fill-white"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
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
