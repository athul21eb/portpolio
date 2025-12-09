import { WindowControls } from "@components";
import { WindowWrapper } from "@hoc";
import { useWindowStore } from "@store";

interface ImageFileData {
  name: string;
  imageUrl: string;
}

const Image = () => {
  const data = useWindowStore(
    (state) => state.windows.imgfile.data
  ) as ImageFileData | null;

 if (!data || typeof data.name !== 'string' || typeof data.imageUrl !== 'string') {
    return null;
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{data.name}</p>
      </div>

      <div className="p-2 bg-gray-200 max-h-[80vh] overflow-auto flex items-center justify-center">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="w-full h-fit object-contain object-center"
        />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
