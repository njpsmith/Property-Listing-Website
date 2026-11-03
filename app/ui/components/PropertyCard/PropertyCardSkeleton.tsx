export function PropertyCardSkeleton() {
  return (
    <div className="flex gap-4 p-4 rounded-lg border border-gray-200 animate-pulse">
      {/* Image placeholder */}
      <div className="w-48 h-36 bg-gray-200 rounded-md shrink-0" />

      {/* Property details */}
      <div className="flex flex-col flex-1 gap-3">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-4" />

        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />

        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />

        <div className="flex gap-4 mt-auto">
          <div className="h-5 bg-gray-200 rounded w-20" />
          <div className="h-5 bg-gray-200 rounded w-20" />
          <div className="h-5 bg-gray-200 rounded w-20" />
        </div>
      </div>
    </div>
  );
}

export default PropertyCardSkeleton;
