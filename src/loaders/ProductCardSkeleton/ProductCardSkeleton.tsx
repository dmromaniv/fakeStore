import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton
          key={index}
          height={300}
          highlightColor="#c7d8fe"
          baseColor="#EBF2FF"
        />
      ))}
    </div>
  );
};

export default ProductCardSkeleton;
