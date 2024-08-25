/* eslint-disable react/prop-types */
import * as s from "./ProductsStyles";
import { formatCurrency } from "./Recommended/RecommendedStyles";

export const CardProducts = (props) => {
  const { img, model, specs, price } = props;
  console.log(model);
  return (
    <s.ProductCard>
      <s.ProductImage src={img} alt={model} />
      <s.ProductTitle>{model}</s.ProductTitle>
      <s.ProductText>{specs}</s.ProductText>
      <s.ProductPrice>{formatCurrency(price)}</s.ProductPrice>
      <s.ProductButton>Comprar</s.ProductButton>
    </s.ProductCard>
  );
};
