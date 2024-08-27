import * as s from "./FilterStyles";

const Category = (props) => {
  const { title } = props;

  return <s.FilterButton>{title}</s.FilterButton>;
};

export default Category;
