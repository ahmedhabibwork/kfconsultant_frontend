"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "nextjs-toploader/app";
import Input from "@/components/cors/Input";
import { Button } from "@/components/ui/button";

const GlobalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/projects?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 left-10 z-40 bg-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="Search"
      >
        <Search className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Fullscreen Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-8 h-8 text-black" />
            </button>

            {/* Search Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full max-w-3xl"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2">Search Projects</h2>
                <p className="text-gray-500">
                  Find exactly what you are looking for
                </p>
              </div>

              <form onSubmit={handleSearch} className="relative w-full">
                <Input
                  className="w-full text-2xl py-8 pl-6 pr-16 bg-transparent border-b-2 border-l-0 border-r-0 border-t-0 border-gray-300 focus:border-black rounded-none transition-colors placeholder:text-gray-300"
                  placeholder="Type to search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <Button
                  type="submit"
                  disabled={!searchTerm.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-full px-6 hover:bg-gray-800 disabled:opacity-50"
                >
                  Search
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalSearch;
