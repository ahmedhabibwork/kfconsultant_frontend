"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination as PaginationType } from "@/types/projectsTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  pagination: PaginationType;
}

const Pagination = ({ pagination }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { current_page, last_page } = pagination;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > last_page) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`?${params.toString()}`);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (last_page <= maxVisiblePages) {
      for (let i = 1; i <= last_page; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of visible range around current page
      let start = Math.max(2, current_page - 1);
      let end = Math.min(last_page - 1, current_page + 1);

      // Adjust if near start
      if (current_page <= 3) {
        end = 4;
      }

      // Adjust if near end
      if (current_page >= last_page - 2) {
        start = last_page - 3;
      }

      // Add ellipsis before range if needed
      if (start > 2) {
        pages.push("...");
      }

      // Add visible range
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis after range if needed
      if (end < last_page - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(last_page);
    }

    return pages;
  };

  if (last_page <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8 pb-8">
      <button
        onClick={() => handlePageChange(current_page - 1)}
        disabled={current_page === 1}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === "..." ? (
              <span className="px-3 py-2 text-gray-500">...</span>
            ) : (
              <button
                onClick={() => handlePageChange(page as number)}
                className={`min-w-[40px] h-[40px] flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                  current_page === page
                    ? "bg-black text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(current_page + 1)}
        disabled={current_page === last_page}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
