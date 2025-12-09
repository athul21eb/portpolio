import { INITIAL_Z_INDEX, navIcons, navLinks } from "@constants";
import { useWindowStore } from "@store";
import dayjs from "dayjs";

const NavBar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav style={{ zIndex: INITIAL_Z_INDEX + 1000 }}>
      <div>
        <img src="/images/logo.svg" alt="src" />
        <p className="font-bold">Athul's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => openWindow(type)}
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
