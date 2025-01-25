import Container from "../../utils/Container";

const Banner = () => {
  return (
    <div className="h-96 md:h-[700px] bg-[url(/foto1.jpg)] bg-cover bg-center mt-28 md:mt-24 z-30">
      <div className="flex items-center h-full  bg-black/50">
        <Container className="text-center">
          <h1 className="text-clampTitle font-sigmar tracking-widest">
            KING OF FLAT
          </h1>
          <div className="text-clamp">
            <p>
              Liga de skateboarding en la modalidad &quot;Game of Skate&quot;
            </p>
            <p>Santuario de Nuestra Señora de Guadalupe GDL Centro📍</p>
            <p>
              Owner:{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/noisyboy_bbx/"
                className="font-bold underline text-red-500"
              >
                @noisyboy_bbx
              </a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
