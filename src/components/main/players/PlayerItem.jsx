const PlayerItem = ({ player, onClick }) => {
  return (
    <div
      className={`bg-black bg-cover size-10 md:size-12 lg:size-14 xl:size-16 2xl:size-20 rounded-sm cursor-pointer hover:scale-105 relative  transition-transform text-xs overflow-hidden flex items-center justify-center`}
      style={{ backgroundImage: `url(${player.img})` }}
      onClick={onClick}
    >
      {player.img == "/skaters/jokercard.jpg" && (
        <span className="bg-black p-1 text-[8px] capitalize">
          {player.name}
        </span>
      )}
    </div>
  );
};
export default PlayerItem;
