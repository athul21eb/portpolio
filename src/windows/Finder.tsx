import { WindowControls } from "@components";
import { locations } from "@constants";
import { WindowWrapper } from "@hoc";
import { useLocationStore, type Location, useWindowStore } from "@store";
import clsx from "clsx";
import { SearchIcon } from "lucide-react";

const Finder = () => {
  const openWindow = useWindowStore((state) => state.openWindow);
  const activeLocation = useLocationStore((state) => state.activeLocation);
  const setActiveLocation = useLocationStore(
    (state) => state.setActiveLocation
  );

  const renderList = (name: string, items: Location[]) => (
    <div>
      {" "}
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              activeLocation.id === item.id ? "active" : "non-active"
            )}
          >
            <img src={item.icon} alt={item.name} className="size-5" />
            <p className="text-sm font-medium truncate"> {item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const openItem = (item: Location) => {
    if ("fileType" in item) {
      if (item.fileType === "pdf") return openWindow("resume");
      if (
        ["url", "fig"].includes(item.fileType) &&
        "href" in item &&
        typeof item.href === "string"
      )
        return window.open(item.href, "_blank");

      if (item.kind) {
        // Window keys are constructed as <fileType><kind> to match WINDOW_CONFIG entries like 'txtfile' or 'imgfile'
        return openWindow(`${item.fileType}${item.kind}`, item);
      }
    }
    if (item.kind === "folder") return setActiveLocation(item);
  };
  return (
    <>
      {" "}
      <div id="window-header">
        <WindowControls target="finder" />
        <p className=" font-semibold text-gray-500">Finder</p>
        <SearchIcon className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {locations.work?.children &&
            renderList("My Projects", locations.work.children)}
        </div>
        <ul className="content">
          {"children" in activeLocation &&
            activeLocation.children &&
            activeLocation.children.map((item) => (
              <li
                key={item.id}
                onClick={() => openItem(item)}
                style={{ cursor: "pointer" }}
                className={"position" in item ? item.position : undefined}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
