import Container from "../utils/Container";

const Footer = () => {
  return (
    <footer className="bg-black py-8 mt-14">
      <Container className="text-center text-gray-400">
        Página web creada por{"  "}
        <a
          className="text-red-500 hover:scale-105 hover:translate-x-1 inline-block transition-transform will-change-transform"
          target="_blank"
          href="https://raymundodev.com/"
        >
          Raymundo Chavez
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
