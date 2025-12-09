import { WindowControls } from "@components";
import { blogPosts } from "@constants";
import { WindowWrapper } from "@hoc";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <button aria-label="Toggle sidebar">
          <PanelLeft className="ml-10 icon" />
        </button>
        <div className="flex items-center gap-1 ml-5">
          <button aria-label="Go back">
            <ChevronLeft className="icon" />
          </button>
          <button aria-label="Go forward">
            <ChevronRight className="icon" />
          </button>
        </div>
        <div className="flex-1 flex-center gap-3">
          <button aria-label="Security">
            <ShieldHalf className="icon" />
          </button>
          <div className="search">
            <button aria-label="Search">
              <Search className="icon" />
            </button>
            <input
              className="flex-1"
              type="text"
              placeholder="Search or Enter a Website Name"
              aria-label="Search or Enter a Website Name"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button aria-label="Share">
            <Share className="icon" />
          </button>
          <button aria-label="Add new tab">
            <Plus className="icon" />
          </button>
          <button aria-label="Copy">
            <Copy className="icon" />
          </button>
        </div>
      </div>
      <div className="blog">
        <h2>My Projects Blog</h2>

        <div className="space-y-8">
          {blogPosts.map(({ id, image, date, title, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p> {date}</p>
                <h2>{title}</h2>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Check out the full post{" "}
                  <MoveRight className="hover:scale-105" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
