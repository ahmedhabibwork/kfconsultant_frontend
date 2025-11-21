import { Search } from "lucide-react";
import GlobeButton from "./GlobeButton";
import MenuButton from "./MenuButton";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-[40px] max-md:px-5 py-[38px] text-white absolute top-0 left-0 w-full right-0">
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
                    <a href="/contact">
                        <button className="group/parent text-white hover:text-secondry w-[130px] min-h-[60px] h-[60px] relative flex items-center justify-center rtl:rotate-180 max-sm:scale-75 max-xs:scale-[.69]">
                            <p className="rtl:rotate-180 text-[13px]">تواصل معنا</p>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="61" viewBox="0 0 201 61" fill="none">
                                    <path
                                        id="Subtract"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.45605 1.41626H199.456V14.0148H200.456V1.41626V0.41626H199.456H1.45605H0.456055V1.41626V59.4163V60.4163H1.45605H199.456H200.456V59.4163V46.8176H199.456V59.4163H1.45605V1.41626Z"
                                        className="fill-white group-hover/parent:fill-secondry"
                                    />
                                </svg>
                            </div>

                            <div className="z-30 absolute -right-6 group-hover/parent:-right-8 duration-300 top-[50%] translate-y-[-50%] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="25" viewBox="0 0 71 25" fill="none">
                                    <path
                                        d="M60.9873 6.34631L67.0573 12.4163L60.9873 18.4863"
                                        className="stroke-white group-hover/parent:stroke-secondry"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3.97266 12.4163L66.8871 12.4163"
                                        className="stroke-white group-hover/parent:stroke-secondry"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;