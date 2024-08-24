import * as s from "./FilterStyles";

function Filter() {
  return (
    <>
      <s.FilterContainer>
        <s.FilterTitle>Filtrar por:</s.FilterTitle>
        <s.FilterButton>SmartPhones</s.FilterButton>
        <s.FilterButton>Notebooks</s.FilterButton>
        <s.FilterButton>iOS</s.FilterButton>
        <s.FilterButton>Android</s.FilterButton>
      </s.FilterContainer>
    </>
  );
}
export default Filter;
