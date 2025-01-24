import Container from "../../utils/Container";
import players from "../../../utils/players.json";

const ScoreBoard = () => {
  return (
    <section id="scoreboard" className="mt-32">
      <Container className="text-center">
        <h2 className="text-2xl font-sigmar mb-10">Tabla de puntos</h2>
        <table className="text-center w-full text-sm">
          <thead className="text-xs  uppercase bg-black ">
            <tr>
              <th className="px-4 py-3">Patinador</th>
              <th className="px-4 py-3">Puntos</th>
              <th className="px-4 py-3">Instagram</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, i) => (
              <tr key={i} className="bg-gray-600 border-b border-gray-500">
                <td className="p-4">{player.name}</td>
                <td className="p-4">{player.points}</td>
                <td className="p-4">
                  <a href="#">{player.instagram}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
};
export default ScoreBoard;
