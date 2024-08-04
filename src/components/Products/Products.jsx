import * as s from "./ProductsStyles";
import { products } from "../../Data/data";
import { CardProducts } from "./CardProducts";

export const Products = () => {
  return (
    <>
      <s.ProductsContainer>
        <s.TitleSection>Productos destacados</s.TitleSection>
        {products.map((product) => (
          <CardProducts key={product.model} {...product} />
        ))}
      </s.ProductsContainer>
    </>
  );
};
