import React from "react";
import NewsCard from "./components/NewsCard";
import { BlogPost } from "@/types/blogTypes";

interface NewsContentProps {
  blogs: BlogPost[];
}

const NewsContent = ({ blogs }: NewsContentProps) => {
  return (
    <div className="container text-white pb-5 grid justify-stretch max-w-fit justify-items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[18px]">
      {blogs.map((blog) => (
        <NewsCard
          key={blog.id}
          id={blog.slug}
          title={blog.title}
          date={new Date(blog.created_at).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          description={blog.short_description}
          image={blog.images[0] || "/newsCard.webp"}
        />
      ))}
    </div>
  );
};

export default NewsContent;
