export const BeforeAfterSkeleton = ({ index }) => {
  return (
    <div
      className={`mt-[2rem] flex flex-col-reverse rounded-lg mb-[1rem]
      lg:mt-[2%] shadow-xl overflow-hidden animate-pulse
      ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      {/* Image Skeleton */}
      <div className="lg:w-1/2 w-full h-[500px] skeleton-shimmer"></div>

      {/* Text Skeleton */}
      <div className="px-[1rem] py-[2rem] w-full lg:w-1/2 space-y-4">
        <div className="h-6 w-[60%] skeleton-shimmer rounded"></div>

        <div className="h-4 w-full skeleton-shimmer rounded"></div>
        <div className="h-4 w-[80%] skeleton-shimmer rounded"></div>

        <div className="space-y-2 mt-4">
          <div className="h-3 w-[90%] skeleton-shimmer rounded"></div>
          <div className="h-3 w-[70%] skeleton-shimmer rounded"></div>
          <div className="h-3 w-[60%] skeleton-shimmer rounded"></div>
        </div>

        <div className="flex gap-2 mt-6">
          <div className="h-10 w-[120px] rounded skeleton-shimmer"></div>
          <div className="h-10 w-[140px] rounded skeleton-shimmer"></div>
          <div className="h-10 w-[130px] rounded skeleton-shimmer"></div>
        </div>
      </div>
    </div>
  );
};
