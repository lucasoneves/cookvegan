import { TitleSection } from "../Title";
import categoriesStyle from "../Category/Category.module.scss";
import Category from "../Category";
import { CategoryTypes } from "../Category";

export default function SectionCategories({categories}: { categories: CategoryTypes[]}) {
  return (
    <section className={`${categoriesStyle["category"]} pb-20`}>
        <div className="container">
          <TitleSection>Categories</TitleSection>
          <ul className={categoriesStyle["category-list"]}>
            {categories?.map((category: CategoryTypes) => {
              return (
                <Category
                  key={category.name}
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