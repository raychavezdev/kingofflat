import useFetchData from "../../../utils/useFetchData";
import Container from "../../layouts/Container";
import PlayerCard from "./PlayerCard";
import PlayerItem from "./PlayerItem";
import { useEffect, useState } from "react";

const PlayersBoard = () => {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const { data: players, error, loading } = useFetchData(`/`);

  useEffect(() => {
    if (players) {
      setSelectedPlayer(players[0]);
    }
  }, [players]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleClick = (player) => {
    setSelectedPlayer(player);
  };

  if (!players) {
    return <p>No players available</p>;
  }

  return (
    <section id="skaters" className="mt-24">
      <Container className="text-center">
        <h2 className="text-2xl font-sigmar mb-10">Patinadores</h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center gap-2  flex-wrap h-80 md:h-[20em] lg:h-[28em]">
            {players.map(
              (player, i) =>
                i % 2 === 0 && (
                  <PlayerItem
                    key={i}
                    player={player}
                    onClick={() => handleClick(player)}
                  />
                )
            )}
          </div>
          <div>
            <PlayerCard player={selectedPlayer} />
          </div>
          <div className="flex flex-col justify-center gap-2 flex-wrap-reverse h-80 md:h-[20em] lg:h-[28em]">
            {players.map(
              (player, i) =>
                i % 2 !== 0 && (
                  <PlayerItem
                    key={i}
                    player={player}
                    onClick={() => handleClick(player)}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default PlayersBoard;
