import HeaderComponent from "@/components/HeaderComponent";

const NewsHeader = () => {
  return (
    <HeaderComponent background="/newsBg.webp">
      <h1 className="uppercase font-medium text-[60px] max-md:text-[35px]">
        News
      </h1>
    </HeaderComponent>
  );
};

export default NewsHeader;
