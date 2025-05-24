import { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const JoditTextArea = ({
  content,
  setContent,
  height,
  toolbarStickyOffset,
}) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typings...",
      required: true,
      height,
      toolbarStickyOffset,
      hidePoweredByJodit: true,
      style: {
        padding: "20",
      },
    }),
    [height, toolbarStickyOffset]
  );
  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)}
      onChange={() => {}}
    />
  );
};
export default JoditTextArea;
