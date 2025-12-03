

import { navIcons, navLinks } from "@constants";
import dayjs from "dayjs";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="src" />
        <p className="font-bold">Athul's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>{name}</li>
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
