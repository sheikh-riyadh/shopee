import { useState } from "react";
import Button from "../../../common/Button";
import BannerForm from "../../../components/admin/AddBanner/BannerForm";
import Modal from "../../../common/Modal";
import BannerTable from "../../../components/admin/AddBanner/BannerTable";

const AddBanner = () => {
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
          <BannerTable />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Add Banner"}
          className="w-[350px] xl:w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <BannerForm setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </div>
  );
};

export default AddBanner;
