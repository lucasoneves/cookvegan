import { TitleSection } from "../Title";
import categoriesStyle from "../Category/Category.module.scss";
import Category from "../Category";
import { CategoryTypes } from "../Category";

export default function SectionCategories({categories}: { categories: CategoryTypes[]}) {
  return (
    <section className={categoriesStyle["category"]}>
        <div className="container">
          <TitleSection>Categories</TitleSection>
          <ul className={categoriesStyle["category-list"]}>
            {categories?.map((category: CategoryTypes) => {
              return (
                <Category
                  path={category.path}
                  name={category.name}
                  thumb={category.thumb}
                />
              );
            })}
          </ul>
        </div>
      </section>
  )
}