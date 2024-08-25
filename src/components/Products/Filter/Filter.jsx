import * as s from "./FilterStyles";

function Filter() {
  return (
    <>
      <s.FilterContainer>
        <s.FilterTitle>Filtrar por:</s.FilterTitle>
        <s.FilterButton>Smartphones</s.FilterButton>
        <s.FilterButton>Laptop</s.FilterButton>
      </s.FilterContainer>
    </>
  );
}
export default Filter;
