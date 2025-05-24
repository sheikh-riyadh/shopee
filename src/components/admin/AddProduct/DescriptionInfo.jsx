import JoditTextArea from "../../../common/JoditTextArea";

const DescriptionInfo = ({setContent, content}) => {
  return (
    <div className="flex flex-col gap-1 p-5 bg-widget">
      <span className="py-2 block font-medium text-sm text-black">
        Long Description <span className="text-danger">*</span>
      </span>
      <div>
        <JoditTextArea  setContent={setContent} content={content} height={"350px"} />
      </div>
    </div>
  );
};
export default DescriptionInfo;
