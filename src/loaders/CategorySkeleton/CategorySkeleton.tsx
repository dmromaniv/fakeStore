import Skeleton from "react-loading-skeleton";

const CategorySkeleton = () => {
  return (
    <div className="grid gap-4 max-xl:px-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:text-center">
      {Array.from({ length: 5 }).map(() => (
        <Skeleton height={30} highlightColor="#c7d8fe" baseColor="#EBF2FF" />
      ))}
    </div>
  );
};

export default CategorySkeleton;
