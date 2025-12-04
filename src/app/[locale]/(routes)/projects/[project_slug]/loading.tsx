export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Header Skeleton */}
      <div className="relative h-[400px] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-64 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-[1114px] px-6 mx-auto mt-[64px]">
        <div className="flex gap-10 max-md:gap-4 mb-4 max-md:mb-10 max-md:flex-col">
          {/* Description Skeleton */}
          <div className="flex-1 space-y-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
          </div>

          {/* Metadata Skeleton */}
          <div className="w-full md:w-[300px] space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2 mt-6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2 mt-6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>
        </div>

        {/* Gallery Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* More Projects Skeleton */}
      <div className="mt-16 px-6">
        <div className="h-8 bg-gray-200 rounded animate-pulse w-48 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] max-w-fit mx-auto">
          <div className="w-[300px] h-[400px] bg-gray-200 rounded animate-pulse"></div>
          <div className="w-[300px] h-[400px] bg-gray-200 rounded animate-pulse"></div>
          <div className="w-[300px] h-[400px] bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
