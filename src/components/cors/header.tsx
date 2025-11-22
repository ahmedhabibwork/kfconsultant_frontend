import { Search } from "lucide-react";
import GlobeButton from "./GlobeButton";
import MenuButton from "./MenuButton";
import ContactButton from "./ContactButton";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[40px] max-md:px-5 py-[38px] text-white absolute top-0 left-0 w-full right-0 z-50">
      <div className="flex items-center gap-3 justify-center">
        <MenuButton />
        <button>
          <Search />
        </button>
      </div>

      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[20px] sm:gap-[30px]">
          <GlobeButton />
        </div>

        <div className="max-sm:hidden">
          <ContactButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
