import Container from "../utils/Container";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="h-28 md:h-24 fixed top-0 z-20 w-full flex bg-black">
      <Container className="flex justify-between items-center">
        <a className="font-sigmar text-xl" href="/">
          King of flat
        </a>
        <Menu />
      </Container>
    </header>
  );
};
export default Header;
