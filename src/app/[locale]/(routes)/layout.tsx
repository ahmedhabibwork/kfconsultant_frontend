import Footer from "@/components/cors/footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
