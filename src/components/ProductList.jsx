import React from "react";
import { MdDelete } from "react-icons/md";

function ProductList({ proList }) {
  return (
    <div className="overflow-x-auto text-sm">
      <table className="w-[88%] table-auto border  mt-0 mx-auto my-table ">
        <thead>
          <tr>
            <th className="border px-1 py-1">Id</th>
            <th className="border px-1 py-1">Brand</th>
            <th className="border px-1 py-1">Type</th>
            <th className="border px-1 py-1">Quantity</th>
            <th className="border px-1 py-1">Price/Unit</th>
            <th className="border px-1 py-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          {proList.map((pro, index) => {
            return (
              <tr key={index} className="text-center hover:text-red-500 pt-2">
                <td className="border px-2 py-1">{pro.productId}</td>
                <td className="border px-2 py-1">{pro.brand}</td>
                <td className="border px-2 py-1">{pro.type}</td>
                <td className="border px-2 py-1">{pro.quantity}</td>
                <td className="border px-2 py-1">{pro.price}</td>
                <td className="border px-2 py-1">{pro.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
