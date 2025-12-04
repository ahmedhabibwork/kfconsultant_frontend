import React from "react";
import NewsHeader from "./NewsHeader";
import NewsContent from "./NewsContent";
import { getBlogs } from "@/actions/blogs";

const page = async () => {
  const blogsData = await getBlogs();
  // Flatten the nested array structure from msg_data
  const blogs = blogsData.msg_data.flat();

  return (
    <div>
      <NewsHeader />
      <p className="py-3 mt-8 mb-[30px] max-md:py-5 border-y-[1px] border-text-gray-200 text-xl font-thin tracking-wide leading-10 uppercase text-primary mx-[30px] h-[64px] flex items-center">
        Latest News
      </p>
      <NewsContent blogs={blogs} />
    </div>
  );
};

export default page;
