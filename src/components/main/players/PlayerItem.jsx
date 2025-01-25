const PlayerItem = ({ player, onClick }) => {
  return (
    <div
      className="bg-[url(/player.jpg)] bg-cover size-10 md:size-12 lg:size-14 xl:size-16 2xl:size-20 rounded-sm cursor-pointer hover:scale-105 relative  transition-transform text-xs overflow-hidden flex items-center justify-center"
      onClick={onClick}
    >
      {player.name}
    </div>
  );
};
export default PlayerItem;
