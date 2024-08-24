import { products } from "../../../Data/data";
import * as s from "./RecommendedStyles";

function Recommended() {
  return (
    <>
      <s.RecommendedContainer>
        <s.RecommendedTitle>Los que te recomendamos</s.RecommendedTitle>
        <s.RecommendedCardContainer>
          <s.RecommendedCard>
            <img src={products[1].img} alt={products[1].model} />
            <h3>{products[1].model}</h3>
            <p>{products[1].price}</p>
          </s.RecommendedCard>
          <s.RecommendedCard>
            <img src={products[2].img} alt="Product" />
            <h3>{products[2].model}</h3>
            <p>{products[2].price}</p>
          </s.RecommendedCard>
          <s.RecommendedCard>
            <img src={products[3].img} alt="Product" />
            <h3>{products[3].model}</h3>
            <p>{products[3].price}</p>
          </s.RecommendedCard>
        </s.RecommendedCardContainer>
      </s.RecommendedContainer>
    </>
  );
}

export default Recommended;
