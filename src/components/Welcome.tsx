import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const renderText = (
  text: string,
  className: string,
  baseWeight: number = 400
) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
      className={className}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const setUpTextHover = (
  container: HTMLElement | null,
  type: keyof typeof FONT_WEIGHTS
) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter: Element, weight: number, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2 / 20000));

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, base, 0.25);
    });
  };
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};
const Welcome = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const titleCleanUp = setUpTextHover(titleRef.current, "title");
    const subtitleCleanUp = setUpTextHover(subtitleRef.current, "subtitle");

    return () => {
      titleCleanUp?.();
      subtitleCleanUp?.();
    };
  }, []);
  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey,I'm Athul! Welcome to my",
          "text-4xl font-georama",
          100
        )}
      </p>

      <h1 className="mt-5 " ref={titleRef}>
        {renderText("PortFolio", "font-georama text-8xl italic")}
      </h1>

      <div className="small-screen ">
        <p>this website looks best in desktop and tables.try it !</p>
      </div>
    </section>
  );
};

export default Welcome;
