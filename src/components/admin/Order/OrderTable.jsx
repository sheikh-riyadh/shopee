import { PhotoProvider, PhotoView } from "react-photo-view";
import Table from "../../../common/Table";
import { numberWithCommas } from "../../../utils/numberWithCommas";

const OrderTable = ({ data = [...Array(5).keys()] }) => {
  return (
    <div className="overflow-hidden">
      <Table
        className="font-normal"
        tableData={data}
        columns={[
          {
            name: "Images",
            render: ({ item }) => {
              return (
                <div className="flex gap-2">
                  <PhotoProvider>
                    {item?.productsInfo?.map((product) => (
                      <figure key={product?._id}>
                        <PhotoView src={product?.image}>
                          <div className="border w-10 h-10 rounded p-1 cursor-pointer">
                            <img
                              className="h-full w-full"
                              src={product?.image}
                              alt="product_gallery_image"
                            />
                          </div>
                        </PhotoView>
                      </figure>
                    ))}
                  </PhotoProvider>
                </div>
              );
            },
          },
          {
            name: "Order ID",
            render: ({ item }) => {
              return (
                <div>
                  <span>#{item?.orderId}</span>
                </div>
              );
            },
          },
          {
            name: "Payment Method",
            render: ({ item }) => {
              return (
                <div>
                  <span>{item?.paymentMethod}</span>
                </div>
              );
            },
          },
          {
            name: "Order Status",
            render: ({ item }) => {
              return (
                <div>
                  <span className="capitalize">{item?.status}</span>
                </div>
              );
            },
          },
          {
            name: "Total",
            render: ({ item }) => {
              return (
                <div>
                  <span className="font-medium">
                    {numberWithCommas(
                      item?.productsInfo?.reduce((total, item) => {
                        return (total +=
                          parseInt(item?.buyQnt) * parseInt(item?.price));
                      }, 0) + parseInt(item?.deliveryCharge ?? 0)
                    )}
                    TK
                  </span>
                </div>
              );
            },
          },
          {
            name: "Actions",
            render: () => {
              return <div className="flex gap-3"></div>;
            },
          },
        ]}
      />
    </div>
  );
};

export default OrderTable;
