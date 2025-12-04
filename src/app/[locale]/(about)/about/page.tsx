import AboutHeader from "./AboutHeader";
import Footer from "@/components/cors/footer";
import OurPurpose from "./(our_purpose)";
import Vision from "./(vision)";
import OurFounder from "./(our_founder)";
import OurPeople from "./(our_people)";
import { getAboutUs } from "@/actions/about";

const page = async () => {
  const aboutData = await getAboutUs();

  return (
    <div className="">
      <AboutHeader />
      <OurPurpose aboutUs={aboutData.msg_data.about_us} />
      <Vision />
      <OurFounder />
      <OurPeople team={aboutData.msg_data.team} />
    </div>
  );
};

export default page;
