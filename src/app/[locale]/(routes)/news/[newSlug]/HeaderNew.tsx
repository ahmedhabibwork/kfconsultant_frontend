import HeaderComponent from "@/components/HeaderComponent";
import { BlogPost } from "@/types/blogDetailesType";

interface HeaderNewProps {
  blog: BlogPost;
}

const HeaderNew = ({ blog }: HeaderNewProps) => {
  return (
    <HeaderComponent background={blog.images[0] || "/contactBg.webp"}>
      <h1 className="text-center text-[60px] max-md:text-[35px] font-medium max-w-2xl">
        {blog.title}
      </h1>
    </HeaderComponent>
  );
};

export default HeaderNew;
