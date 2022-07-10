const NavItem = ({ item }) => {
  const { label, icon, active } = item;

  return (
    <div>
      <li
        className={`flex p-2 justify-end cursor-pointer ${
          active ? "bg-sky-900 text-while" : " "
        }`}
      >
        <h4>{label}</h4>
        &nbsp;
        {icon}
      </li>
    </div>
  );
};

export default NavItem;
