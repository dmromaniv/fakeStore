import CategorySkeleton from "../../loaders/CategorySkeleton";

import useCategories from "../../hooks/useCategories";

interface CategoriesListProps {
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
}

const CategoriesList = ({
  selectedCategory,
  onCategoryClick,
}: CategoriesListProps) => {
  const { isLoadingStatus, categories } = useCategories();

  return isLoadingStatus ? (
    <CategorySkeleton />
  ) : (
    categories.length > 0 && (
      <ul className="grid gap-4 max-xl:px-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:text-center">
        <li
          className={`cursor-pointer text-lg first-letter:uppercase hover:text-accent ${selectedCategory === "All" ? "font-semibold text-accent underline" : "font-medium text-primary"}`}
          onClick={() => {
            onCategoryClick("All");
          }}
        >
          All
        </li>
        {categories.map((category, index) => {
          return (
            <li
              className={`cursor-pointer text-lg first-letter:uppercase hover:text-accent ${selectedCategory === category ? "font-semibold text-accent underline" : "font-medium text-primary"}`}
              key={`category-${index}`}
              onClick={() => {
                onCategoryClick(category);
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    )
  );
};

export default CategoriesList;
