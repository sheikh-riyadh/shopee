import { useEffect, useState } from "react";
import { FaClipboard } from "react-icons/fa";
import cn from "../utils/cn";
const Table = ({ columns, tableData, className }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (tableData) {
      setData(
        tableData?.map((item, index) => {
          return { ...item, key: index };
        })
      );
    }
  }, [tableData]);

  return (
    <div className="overflow-x-auto">
      {data?.length ? (
        <table
          className={cn(`min-w-full`, className)}
        >
          <thead className="bg-slate-100">
            <tr>
              {columns?.map((column, index) => (
                <th key={index} className="p-4 text-left text-black">
                  <div className="flex items-center justify-between">
                    <span className="whitespace-nowrap">{column.name}</span>{" "}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className={cn(
              `text-sm font-light`,
              className
            )}
          >
            {data?.map((item, index) => (
              <tr key={index} className="">
                {columns?.map((column, index) => (
                  <td key={index} className="p-4 border-t border-black">
                    {column?.render ? (
                      <column.render item={item} />
                    ) : (
                      <span
                        className="whitespace-nowrap"
                        title={
                          item[column?.dataIndex]?.length > 30
                            ? item[column?.dataIndex]
                            : undefined
                        }
                      >
                        {item[column?.dataIndex]?.length > 30
                          ? item[column?.dataIndex]?.slice(0, 30) + "..."
                          : item[column?.dataIndex]
                          ? item[column?.dataIndex]
                          : "N/A"}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex gap-5 flex-col items-center justify-center w-full h-80">
          <FaClipboard className="text-8xl text-slate-300"  />
          <span className="font-medium text-xl text-accent capitalize">No data found</span>
        </div>
      )}
    </div>
  );
};

export default Table;