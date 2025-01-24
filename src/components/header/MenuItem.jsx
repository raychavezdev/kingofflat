const MenuItem = ({ text, href, onClick }) => {
  return (
    <li className="hover:text-red-600 transition-colors py-4" onClick={onClick}>
      <a href={href}>{text}</a>
    </li>
  );
};
export default MenuItem;
