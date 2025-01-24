import Container from "../../utils/Container";
import PlayerCard from "./PlayerCard";
import PlayerItem from "./PlayerItem";
import players from "../../../utils/players.json";
import { useState } from "react";

const PlayersBoard = () => {
  console.log(players);

  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const handleClick = (player) => {
    setSelectedPlayer(player);
  };

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
