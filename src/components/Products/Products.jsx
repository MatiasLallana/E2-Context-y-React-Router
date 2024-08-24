import * as s from "./ProductsStyles";
import { products } from "../../Data/data";
import { CardProducts } from "./CardProducts";
import Filter from "./Filter/Filter";
import Recommended from "./Recommended/Recommended";

export const Products = () => {
  return (
    <>
      <Recommended />
      <Filter />
      <s.ProductsContainer>
        <s.TitleSection>Productos destacados</s.TitleSection>
        {products.map((product) => (
          <CardProducts key={product.model} {...product} />
        ))}
      </s.ProductsContainer>
    </>
  );
};
