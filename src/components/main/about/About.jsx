import Container from "../../utils/Container";

const About = () => {
  return (
    <section id="about" className="mt-32">
      <Container className="text-center flex flex-col items-center gap-8">
        <h2 className="text-2xl font-sigmar ">Acerca de</h2>
        <img src="logo.jpg" className="size-40" alt="" />
        <div>
          <div className="flex flex-col gap-4">
            <p>
              King of Flat es una liga de Game of Skate en la que 27 skaters
              competirán sábados y domingos por el título de King of Lad.
            </p>
            <p>
              La liga está compuesta por dos formatos distintos, la primera fase
              por clasificación de puntos del 11 de Enero al 15 de Febrero y
              playoffs de 16 del Febrero a 15 de Marzo, donde solo el top 16 de
              la primera fase pasarán al formato de llaves, esto quiere decir
              octavos, cuartos, semis y finales.
            </p>
            <p>
              Los puntos se ajustan dependiendo cada combate ganado o perdido.
              Al inicio de la temporada cada uno de los competidores iniciará
              con 1200 style points o SPs. Cada competidor tendrá dos juegos
              obligatorios por día en el que sólo podrán retar a competidores
              del mismo sp o superior.
            </p>
            <p>
              La cantidad de puntos adquiridos por cada combate es ajustada a un
              tabulador de diferencia de puntos. 16, 24, 40 y 100. Ejemplo, si
              competidor 1 tiene 1230 SP, si quiere retar a competidor 2, que
              tiene 1260 SP, la diferencia de puntos es de 30. Y el valor más
              cercano es 24, por lo tanto, esos 24 puntos estarán en juego. Es
              decir, si competidor 1 gana, tendrá 1254, y el competidor 2 tendrá
              1236.
            </p>
          </div>
          <h3 className="my-4 font-sigmar tracking-widest text-black shadow-sm shadow-white">
            Reglas del formato:
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-4">
            <li>
              Los competidores tendrán derecho a faltar un día de competición
              sin ningún tipo de sanción. Si falta dos días de competición, se
              le restarán 50 puntos y solo tendrán un enfrentamiento por día el
              resto de la competición.
            </li>
            <li>
              El trash talk o la toxicidad está permitida siempre y cuando solo
              se mantenga en conflictos relacionados a la liga y nada más.
            </li>
            <li>
              Cada uno de los participantes está obligado a aceptar los
              enfrentamientos que se le requieran. Esto quiere decir que si tú
              ya jugaste tus tres juegos y si alguien más te reta, estás
              obligado a aceptar el reto.
            </li>
          </ul>
          <h3 className="my-4 font-sigmar tracking-widest text-black shadow-sm shadow-white">
            Las reglas en los juegos son las de siempre:
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-4">
            <li>No grabs, no bonelesses, no manuals.</li>
            <li>
              Si tu contrincante hace un impossible y lo raspa, tú tienes que
              rasparlo también.
            </li>
            <li>
              Si el truco que hace tu contrincante está bien popeado, tú debes
              de popearlo también.
            </li>
            <li>
              El que tenga el liderazgo y el que tenga el turno para poner,
              tendrá que hacerlo con la mayor calidad de performance que pueda y
              lo decidirá un referí que estará en el público de saber si lo hizo
              correctamente o se tiene que repetir.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
export default About;
