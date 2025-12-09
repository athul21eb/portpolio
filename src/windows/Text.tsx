import { WindowControls } from "@components";
import { WindowWrapper } from "@hoc";
import { useWindowStore } from "@store";

interface TextFileData {
  name: string;
  description?: string[];
  subtitle?: string;
  image?: string;
}

const Text = () => {
  const data = useWindowStore(
    (state) => state.windows.txtfile.data
  ) as TextFileData | null;

  if (!data) {
    return null;
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="flex h-[calc(100%-60px)] flex-col overflow-auto p-5">
        {data.image && (
          <div className="mb-6 flex justify-center">
            <img
              src={data.image}
              alt={data.name}
              className="max-h-64 rounded-lg object-contain"
            />
          </div>
        )}

        {data.subtitle && (
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            {data.subtitle}
          </h3>
        )}

        {data.description && data.description.length > 0 && (
          <div className="space-y-4">
            {data.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
