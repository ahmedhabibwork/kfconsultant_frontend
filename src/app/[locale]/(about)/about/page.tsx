import AboutHeader from "./AboutHeader";
import Footer from "@/components/cors/footer";
import OurPurpose from "./(our_purpose)";
import Vision from "./(vision)";
import OurFounder from "./(our_founder)";
import OurPeople from "./(our_people)";

const page = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      <AboutHeader />
      <OurPurpose />
      <Vision />
      <OurFounder />
      <OurPeople />
      <Footer />
    </div>
  );
};

export default page;
