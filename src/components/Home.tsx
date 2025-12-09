import { locations } from "@constants";
import { useGSAP } from "@gsap/react";
import { useLocationStore, useWindowStore, type Location } from "@store";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
const Home = () => {
  const openWindow = useWindowStore((state) => state.openWindow);
  const setActiveLocation = useLocationStore(
    (state) => state.setActiveLocation
  );
  const handleFolderOpen = (project: Location) => {
    setActiveLocation(project);
    openWindow("finder");
  };
  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  const projects = locations.work?.children ?? [];
  return (
    <section id="home">
      <ul>
        {projects.map((project, index) => (
          <li
            onClick={() => handleFolderOpen(project)}
            key={project?.id ?? project?.name ?? `project-${index}`}
            className={clsx("group folder", project?.windowPosition)}
          >
            {project?.icon && (
              <img
                src={project.icon}
                alt={project?.name || "Project icon"}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )}
            <p>{project?.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
