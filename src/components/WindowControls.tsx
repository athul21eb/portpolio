import { useWindowStore, type WindowKey } from "@store/windows";

const WindowControls = ({ target }: { target: WindowKey }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <button
        type="button"
        className="close"
        onClick={() => closeWindow(target)}
      />
      <button type="button" className="minimize" />
      <button type="button" className="maximize" />
    </div>
  );
};

export default WindowControls;
