const PlayersCard = ({ player }) => {
  return (
    <div>
      <div>
        <img className="w-72" src={player.img} alt="" />
        <p className="text-xl font-sigmar tracking-widest capitalize">
          {player.name}
        </p>
        <p>Puntos: {player.points}</p>
        <p>
          Ig:{" "}
          <a
            className="font-bold"
            target="_blank"
            href={`https://www.instagram.com/${player.instagram}/`}
          >
            {player.instagram}
          </a>
        </p>
      </div>
    </div>
  );
};
export default PlayersCard;
