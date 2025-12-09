import { useGSAP } from "@gsap/react";
import { useWindowStore, type WindowKey } from "@store";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { type ComponentType, useRef, useLayoutEffect } from "react";

const WindowWrapper = <P extends object>(
  Component: ComponentType<P>,
  windowKey: WindowKey
) => {
  const Wrapped = (props: P) => {
    const { zIndex, isOpen } = useWindowStore(
      (state) => state.windows[windowKey]
    );
    const focusWindow = useWindowStore((state) => state.focusWindow);
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
      const element = ref.current;
      if (!element || !isOpen) return;
      element.style.display = "block";

      gsap.fromTo(
        element,
        { scale: 0.5, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return;

      const [instance] = Draggable.create(element, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;

      element.style.display = isOpen ? "block" : "none";
    }, [isOpen]);
    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };
  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || windowKey
  })`;
  return Wrapped;
};

export default WindowWrapper;
