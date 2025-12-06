"use client";
import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Category } from "@/types/CategoriesTypes";
import { Separator } from "@/components/ui/separator";

interface MobileMenuProps {
  categories: Category[];
}

const MobileMenu = ({ categories }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Contact us", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden relative z-[60]">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="text-white hover:text-gray-300 transition-colors focus:outline-none p-2 relative z-[61]">
            <Menu size={28} />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[85%] sm:w-[400px] bg-gradient-to-b from-gray-900 via-gray-900 to-black border-l border-gray-800 text-white p-0"
        >
          <VisuallyHidden>
            <SheetTitle>Mobile Menu</SheetTitle>
            <SheetDescription>
              Navigation links for mobile devices
            </SheetDescription>
          </VisuallyHidden>

          {/* Header */}
          <div className="px-6 py-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white">KFconsultant</h2>
            <p className="text-sm text-gray-400 mt-1">Navigation Menu</p>
          </div>

          {/* Navigation */}
          <nav className="px-6 py-4 space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Projects with Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="projects" className="border-none">
                <AccordionTrigger className="px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg hover:no-underline [&[data-state=open]]:bg-white/10 [&[data-state=open]]:text-white">
                  Projects
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-0">
                  <div className="pl-4 pt-2 space-y-1 border-l border-gray-700">
                    <Link
                      href="/projects"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded transition-all duration-200"
                    >
                      All Projects
                    </Link>
                    <Separator className="my-2 bg-gray-800" />
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/projects?category=${category.slug}`}
                        onClick={handleLinkClick}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded transition-all duration-200"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
