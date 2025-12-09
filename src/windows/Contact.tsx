import { WindowControls } from "@components";
import { socials } from "@constants";
import { WindowWrapper } from "@hoc";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/a.jpg"
          alt="Profile photo of Athul"
          className="rounded-full w-20 h-20"
        />
        <h3>Let's Connect</h3>
        <p>Feel free to reach out anytime—I'm always happy to connect.</p>
        <p>
          {" "}
          <a
            href="mailto:athul.eb21@gmail.com"
            className="text-blue-600 hover:underline"
          >
            athul.eb21@gmail.com
          </a>
        </p>
        <ul>
          {socials.map(({ id, bg, icon, link, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                title={text}
                rel="noopener noreferrer"
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
