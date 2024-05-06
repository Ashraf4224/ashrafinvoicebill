import React from "react";

const Invoice = ({ id, date }) => {
  return (
    <div className="container w-full h-auto flex flex-col mx-auto mt-2 px-2">
      <h1 className="text-center text-2xl font-bold">Invoice</h1>
      <div className="flex justify-around   py-2 font-semibold ">
        <label>
          Invoice Id :<span className="pl-2">{id}</span>
        </label>
        <label>
          Date :<span className="pl-2">{date}</span>
        </label>
      </div>
    </div>
  );
};

export default Invoice;
