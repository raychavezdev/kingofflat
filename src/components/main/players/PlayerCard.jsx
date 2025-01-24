const PlayersCard = ({ player }) => {
  return (
    <div>
      <div>
        <img className="" src="player.jpg" alt="" />
        <p className="text-xl font-sigmar tracking-widest">{player.name}</p>
        <p>Puntos: {player.points}</p>
        <p>
          Ig:{" "}
          <a className="font-bold" href="#">
            {player.instagram}
          </a>
        </p>
      </div>
    </div>
  );
};
export default PlayersCard;
