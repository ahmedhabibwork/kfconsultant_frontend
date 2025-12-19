"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Category } from "@/types/CategoriesTypes";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  categories: Category[];
}

const Header = ({ categories }: HeaderProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 text-white ${
        isSticky
          ? "bg-black/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-4 lg:py-8"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="w-auto relative z-[60]">
            <div
              id="colorlib-logo"
              className="text-2xl font-bold tracking-widest"
            >
              <Link href="/">KFconsultant</Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 text-right justify-end relative z-[51]">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10`}
                  >
                    About us
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/services"
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10`}
                  >
                    Services
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10">
                    <Link href="/projects">Projects</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] md:w-[450px] bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-3">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wide text-start">
                          Project Categories
                        </h3>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-1 p-3">
                        {categories.map((category) => (
                          <li key={category.id}>
                            <Link
                              href={`/projects?category=${category.slug}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200 group"
                            >
                              <span className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                              <span className="text-sm font-medium">
                                {category.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-100 text-start">
                        <Link
                          href="/projects"
                          className="text-sm text-primary font-medium hover:underline"
                        >
                          View all projects →
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/news"
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10`}
                  >
                    News
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/careers"
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10`}
                  >
                    Careers
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10`}
                  >
                    Contact us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu categories={categories} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
