import { useState } from "react";
import Button from "../../../common/Button";
import Modal from "../../../common/Modal";
import AddCategoryTable from "../../../components/admin/AddCategory/AddCategoryTable";
import AddCategoryForm from "../../../components/admin/AddCategory/AddCategoryForm";

const AddCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid xl:grid-cols-2">
          <span className="font-bold text-xl text-white">{`Categories`}</span>
          <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
            <Button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="w-36"
            >
              Add Banner
            </Button>
          </div>
        </div>
        <div>
          <AddCategoryTable />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Add Category"}
          className="w-[350px] xl:w-[300px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <AddCategoryForm />
        </Modal>
      )}
    </div>
  );
};

export default AddCategory;
