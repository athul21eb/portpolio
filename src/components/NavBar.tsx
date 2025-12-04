import { navIcons, navLinks } from "@constants";
import { useWindowStore, type WindowKey } from "@store";
import dayjs from "dayjs";

const NavBar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav className="z-50">
      <div>
        <img src="/images/logo.svg" alt="src" />
        <p className="font-bold">Athul's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => openWindow(type as WindowKey)}
                className="hover:underline"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icons-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default NavBar;
