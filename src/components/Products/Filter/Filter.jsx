import { useSelector } from "react-redux";
import * as s from "./FilterStyles";
import Category from "./Category";

const Filter = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <>
      <s.FilterContainer>
        <s.FilterTitle>Filtrar por:</s.FilterTitle>
        {categories.map((category) => {
          return <Category key={category.id} {...category} />;
        })}
      </s.FilterContainer>
    </>
  );
};
export default Filter;
