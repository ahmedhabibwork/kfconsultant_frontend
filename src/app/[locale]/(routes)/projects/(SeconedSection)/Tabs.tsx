"use client";
import { motion } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";

interface TabsProps {
  categories: Record<string, string>;
}

const Tabs = ({ categories }: TabsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (categoryKey: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryKey === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryKey);
    }
    router.push(`?${params.toString()}`);
  };

  // Convert categories record to array and add "all" option
  const categoryEntries = [
    { key: "all", label: "All" },
    ...Object.entries(categories).map(([key, label]) => ({ key, label })),
  ];

  return (
    <div className="flex flex-1 max-w-full overflow-x-auto" id="projects">
      <div className="flex uppercase py-3 px-[18px] text-sm w-full gap-8 items-center">
        {categoryEntries.map((category) => (
          <div
            key={category.key}
            onClick={() => handleCategoryChange(category.key)}
            className="relative cursor-pointer whitespace-nowrap pb-1"
          >
            <span
              className={`transition-colors duration-300 ${
                activeCategory === category.key
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {category.label}
            </span>
            {activeCategory === category.key && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
