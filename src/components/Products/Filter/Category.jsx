import * as s from "./FilterStyles";

const Category = (props) => {
  const { name } = props;
  console.log(name);

  return <s.FilterButton>{name}</s.FilterButton>;
};

export default Category;
