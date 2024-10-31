import React from "react";

const TableHead = ({ historyHead, historyRowData }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center table-head">
          {historyHead.map((item, index) => {
            return (
              <div className="w-[20%]" key={index}>
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>
        {historyRowData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center table-body-row"
            >
              <div className="w-[20%]">
                <p>{item?.Type}</p>
              </div>
              <div className="w-[20%]">
                <p>{item?.Amount}</p>
              </div>
              <div className="w-[20%]">
                <p>{item?.Balance}</p>
              </div>
              <div className="w-[20%]">
                <p>{item?.Status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TableHead;
