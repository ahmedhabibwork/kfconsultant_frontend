"use client";
import { Link } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Header = () => {
  return (
    <nav className="w-full absolute top-0 left-0 z-50 py-4 lg:py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-auto z-50">
            <div
              id="colorlib-logo"
              className="text-2xl font-bold tracking-widest"
            >
              <Link href="/">AACE</Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 text-right justify-end">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
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
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white text-black">
                      {[
                        {
                          title: "Landmark",
                          href: "/project-category/landmark",
                        },
                        {
                          title: "High Rise",
                          href: "/project-category/high-rise",
                        },
                        {
                          title: "Mixed-Use",
                          href: "/project-category/mixed-use",
                        },
                        {
                          title: "Residential",
                          href: "/project-category/residential",
                        },
                        {
                          title: "Commercial",
                          href: "/project-category/commercial",
                        },
                        {
                          title: "Industrial",
                          href: "/project-category/industrial",
                        },
                        {
                          title: "Healthcare",
                          href: "/project-category/healthcare",
                        },
                        {
                          title: "Bridges and Tunnels",
                          href: "/project-category/bridges-tunnels",
                        },
                        {
                          title: "Educational",
                          href: "/project-category/educational",
                        },
                        {
                          title: "Governmental",
                          href: "/project-category/governmental",
                        },
                        {
                          title: "Recreational",
                          href: "/project-category/recreational",
                        },
                        {
                          title: "Religious",
                          href: "/project-category/religious",
                        },
                      ].map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
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
          <div className="lg:hidden z-50">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white focus:outline-none">
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-black/95 border-none text-white"
              >
                <VisuallyHidden>
                  <SheetTitle>Mobile Menu</SheetTitle>
                  <SheetDescription>
                    Navigation links for mobile devices
                  </SheetDescription>
                </VisuallyHidden>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/about"
                    className="text-lg font-medium hover:text-gray-300 transition-colors"
                  >
                    About us
                  </Link>
                  <Link
                    href="/services"
                    className="text-lg font-medium hover:text-gray-300 transition-colors"
                  >
                    Services
                  </Link>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/projects"
                      className="text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                      Projects
                    </Link>
                    <div className="pl-4 flex flex-col gap-2 text-base text-gray-400">
                      <Link href="/project-category/landmark">Landmark</Link>
                      <Link href="/project-category/high-rise">High Rise</Link>
                      <Link href="/project-category/mixed-use">Mixed-Use</Link>
                      <Link href="/project-category/residential">
                        Residential
                      </Link>
                      <Link href="/project-category/commercial">
                        Commercial
                      </Link>
                      <Link href="/project-category/industrial">
                        Industrial
                      </Link>
                      <Link href="/project-category/healthcare">
                        Healthcare
                      </Link>
                      <Link href="/project-category/bridges-tunnels">
                        Bridges and Tunnels
                      </Link>
                      <Link href="/project-category/educational">
                        Educational
                      </Link>
                      <Link href="/project-category/governmental">
                        Governmental
                      </Link>
                      <Link href="/project-category/recreational">
                        Recreational
                      </Link>
                      <Link href="/project-category/religious">Religious</Link>
                    </div>
                  </div>
                  <Link
                    href="/news"
                    className="text-lg font-medium hover:text-gray-300 transition-colors"
                  >
                    News
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium hover:text-gray-300 transition-colors"
                  >
                    Contact us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
