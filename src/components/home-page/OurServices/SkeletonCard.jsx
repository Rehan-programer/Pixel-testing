export const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full my-[1%]">
    
    {/* Image skeleton */}
    <div className="w-full h-[500px] skeleton-shimmer"></div>

    {/* Text skeleton */}
    <div className="p-4 space-y-3">
      <div className="h-4 w-[60%] rounded skeleton-shimmer"></div>
      <div className="h-3 w-full rounded skeleton-shimmer"></div>
      <div className="h-3 w-[80%] rounded skeleton-shimmer"></div>
    </div>

  </div>
);