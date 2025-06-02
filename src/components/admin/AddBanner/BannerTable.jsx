import { ImSpinner9 } from "react-icons/im";
import Table from "../../../common/Table";

const BannerTable = () => {
  const isLoading = false;

  return (
    <div>
      {!isLoading ? (
        <div>
          <Table
            className="font-normal"
            tableData={[]}
            columns={[
              {
                name: "Image",
                render: ({ item }) => {
                  return (
                    <div className="flex items-center gap-2 h-12 w-12">
                      <img
                        className="w-full h-full"
                        src={item?.image}
                        alt="category"
                      />
                    </div>
                  );
                },
              },
              {
                name: "URL",
                dataIndex: "category",
                key: "category",
              },

              {
                name: "Actions",
                render: () => {
                  return <div className="flex items-center gap-2"></div>;
                },
              },
            ]}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
          <ImSpinner9 className="text-6xl animate-spin text-white" />
          <span className="font-medium text-accent">Loading...</span>
        </div>
      )}
    </div>
  );
};
export default BannerTable;
