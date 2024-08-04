import * as s from "./HeroStyles.js";
export const Hero = () => {
  return (
    <>
      <s.HeroContainer>
        <s.HeroImage
          src="https://www.undertec.store/wp-content/uploads/2020/10/celulares-undertaker-tec-store.webp"
          alt="Hero"
        />
        <s.HeroContent>
          <s.HeroTitle>Encuentra tu próximo dispositivo aquí!</s.HeroTitle>
          <s.HeroText>
            Encuentra los últimos modelos de celulares, tablets y notebooks, con
            las mejores ofertas y descuentos, todo en un solo lugar. Innovación
            y calidad garantizadas.
          </s.HeroText>
        </s.HeroContent>
      </s.HeroContainer>
    </>
  );
};
