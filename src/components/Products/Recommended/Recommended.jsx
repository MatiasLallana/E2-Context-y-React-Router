/* eslint-disable react/prop-types */
import * as s from "./RecommendedStyles";

function Recommended({ img, model, price }) {
  return (
    <>
      <s.RecommendedCard>
        <img src={img} alt={model} />
        <h3>{model}</h3>
        <p>{s.formatCurrency(price)}</p>
      </s.RecommendedCard>
    </>
  );
}

export default Recommended;
