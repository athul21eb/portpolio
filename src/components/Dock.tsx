import { dockApps } from "@constants";
import { useGSAP } from "@gsap/react";
import { type WindowKey, useWindowStore } from "@store/windows";
import gsap from "gsap";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";

const Dock = () => {
  const { windows, openWindow, closeWindow } = useWindowStore();
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateDock = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();

        const distance = Math.abs(mouseX - (iconLeft - left + width / 2));
        const intensity = Math.exp(-(distance ** 2.5 / 20000));

        gsap.to(icon, {
          duration: 0.2,
          ease: "power1.out",
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      animateDock(e.clientX - left);
    };
    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          duration: 0.2,
          ease: "power1.out",
          scale: 1,
          y: 0,
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleApp = (app: { id: string; canOpen: boolean }) => {
    if (!app.canOpen) return;

    const windowKey = app.id as WindowKey;
    const window = windows[windowKey];

    if (!window) {
      console.error(`Window not found for key: ${windowKey}`);
      return;
    }

    if (window.isOpen) {
      closeWindow(windowKey);
    } else {
      openWindow(windowKey);
    }
  };
  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-40"}
              />
            </button>
          </div>
        ))}
        <Tooltip className="tooltip" id="dock-tooltip" place="top-start" />
      </div>
    </section>
  );
};

export default Dock;
