import React from "react";

function Customer({ name, mobile }) {
  return (
    <div className="container w-full h-auto flex flex-col mx-auto mt-2 px-2">
      <h1 className="text-center text-xl font-bold">Customer Details</h1>
      <div className="flex flex-col gap-2  md:flex-row justify-evenly pl-6 md:pl-0 py-2 font-semibold ">
        <div className="flex  space-x-2 justify-between">
          <label>
            Name :<span className="pl-4">{name}</span>
          </label>
          <label>
            Mobile:<span className="pl-4">{mobile}</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Customer;
