import { getAboutUs } from "@/actions/about";
import AboutPageClient from "./AboutPageClient";

const page = async () => {
  const aboutData = await getAboutUs();

  return (
    <AboutPageClient
      aboutUs={aboutData.msg_data.about_us}
      team={aboutData.msg_data.team}
    />
  );
};

export default page;
