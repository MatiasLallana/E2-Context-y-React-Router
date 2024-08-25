import * as s from "./ProductsStyles";
import * as S from "./Recommended/RecommendedStyles";

import { Products } from "../../Data/data";
import { CardProducts } from "./CardProducts";
import Filter from "./Filter/Filter";
import Recommended from "./Recommended/Recommended";
import { RecommendedProducts } from "../../Data/Recommended";

export const CardsProducts = () => {
  return (
    <>
      <S.RecommendedContainer>
        <S.RecommendedTitle>Los que te recomendamos</S.RecommendedTitle>
        <S.RecommendedCardContainer>
          {RecommendedProducts.map((product) => (
            <Recommended key={product.id} {...product} />
          ))}
        </S.RecommendedCardContainer>
      </S.RecommendedContainer>
      <Filter />
      <s.ProductsContainer>
        <s.TitleSection>Productos destacados</s.TitleSection>
        {Object.entries(Products).map(([, foods]) =>
          foods.map((food) => <CardProducts key={food.id} {...food} />)
        )}
      </s.ProductsContainer>
    </>
  );
};
