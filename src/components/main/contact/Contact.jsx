import InstagramIcon from "../../icons/InstagramIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import Container from "../../layouts/Container";

const Contact = () => {
  const sponsors = [
    {
      name: "apche",
      img: "apache.png",
      instagram: "https://www.instagram.com/apch.mx/",
    },
    {
      name: "dale",
      img: "dale.png",
      instagram: "https://www.instagram.com/daleskate/",
    },
    {
      name: "insane",
      img: "insane.png",
      instagram: "https://www.instagram.com/insanegdl/",
    },
    {
      name: "veneno",
      img: "veneno.png",
      instagram: "https://www.instagram.com/vno_skate_shop/",
    },
    {
      name: "unusual",
      img: "unusual.png",
      instagram: "https://www.instagram.com/unusual_skateboarding/",
    },
    {
      name: "status",
      img: "status.png",
      instagram: "https://www.instagram.com/horda_status/",
    },
  ];
  return (
    <section id="contact" className="mt-32">
      <Container className="text-center">
        <h2 className="text-2xl font-sigmar mb-4">Contacto</h2>

        <h3 className="mb-4">Sigue la liga en sus redes sociales:</h3>

        <ul className="flex justify-center gap-4">
          <li className="hover:text-black transition-colors">
            <a target="_blank" href="https://www.instagram.com/king_0f_flat/">
              <InstagramIcon />
            </a>
          </li>
          <li className="hover:text-black pointer transition-colors">
            <a target="_blank" href="https://www.youtube.com/@KINGOFFLAT">
              {" "}
              <YoutubeIcon />
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-sigmar mb-4 mt-8">Patrocinadores</h2>

        <div className="flex justify-center gap-4">
          {sponsors.map((sponsor, i) => (
            <a
              target="_blank"
              href={sponsor.instagram}
              className="cursor-pointer hover:scale-105 transition-transform will-change-transform"
              key={i}
            >
              <img
                className="size-24 aspect-square grayscale"
                src={`sponsors/${sponsor.img}`}
                alt={`logo de ${sponsor.name}`}
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Contact;
