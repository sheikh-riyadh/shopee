import Input from "../../../common/Input";
import SubmitButton from "../../../common/SubmitButton";

const AddCategoryForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-2">
        <Input placeholder="Category name" required />
        <SubmitButton children={"Submit"} />
      </form>
    </div>
  );
};

export default AddCategoryForm;
