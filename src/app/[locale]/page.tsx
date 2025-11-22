import FirstSection from "./(home)/firstSection";
import SeconedSection from "./(home)/seconedSection";
import ThirdSection from "./(home)/thiredSection";

const page = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      <FirstSection />
      <SeconedSection />
      <ThirdSection />
    </div>
  );
};

export default page;
