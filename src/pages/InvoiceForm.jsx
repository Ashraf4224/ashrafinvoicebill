import React, { useState, useRef, useEffect } from "react";
import ProductData from "./ProductData";
import { MdDelete } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import { PdfPrint } from "./PdfPrint";
import Header from "../components/Header";

function InvoiceForm() {
  const id = crypto.randomUUID().substring(0, 8);
  const date = Date().substring(4, 16);
  const dataRef = useRef();
  const [panel, setPanel] = useState(false);
  const panelClose = () => {
    setPanel(false);
  };
  const [productList, setproductList] = useState([]);
  const addproducts = (data) => {
    setproductList([...productList, data]);
  };
  const proListDelete = (index) => {
    const delData = [...productList];
    delData.splice(index, 1);
    setproductList(delData);
  };
  const totalBill = productList.reduce((add, pro) => {
    return add + parseFloat(pro.amount);
  }, 0);
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const submitFunction = (e) => {
    e.preventDefault();
    handlePrint();
    dataRef.current.reset();
    setproductList([]);
  };
  const [totalData, setTotalData] = useState({
    invoiceId: id,
    date: date,
    ProList: productList,
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTotalData((prevData) => ({
      ...prevData,
      [name]: value,
      invoiceId: id,
      date: date,
      ProList: productList,
    }));
  };
  return (
    <div className="w-full h-screen bg-slate-300 items-center flex flex-col mx-auto">
      <Header />
      <form
        ref={dataRef}
        className="grid grid-cols-2 gap-1 w-[94%] pt-2 justify-between pb-2"
      >
        <label>Invoice Id</label>
        <input
          type="text"
          readOnly
          value={id || ""}
          name="invoiceId"
          required
          className="outline-none rounded-lg pl-2 py-1"
          onChange={changeHandler}
        />
        <label>Date</label>
        <input
          onChange={changeHandler}
          type="text"
          value={date || ""}
          readOnly
          name="date"
          required
          className="outline-none rounded-lg pl-2 py-1"
        />
        <label>Customer Name</label>
        <input
          onChange={changeHandler}
          type="text"
          name="cName"
          required
          className="outline-none rounded-lg pl-2 py-1"
        />
        <label>Mobile</label>
        <input
          onChange={changeHandler}
          type="number"
          name="mobile"
          required
          className="outline-none rounded-lg pl-2 py-1"
        />
        <label></label>
        <button
          type="button"
          onClick={() => setPanel(true)}
          className="mt-2 py-2 bg-gradient-to-r from-pink-500 to-purple-700 items-center rounded-lg font-semibold hover:text-white "
        >
          Add Products
        </button>
      </form>
      {panel && (
        <ProductData closeCall={panelClose} addproducts={addproducts} />
      )}
      {productList && (
        <div className="w-full h-full md:h-screen  flex  flex-col">
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
                  <th className="border px-1 py-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((pro, index) => {
                  return (
                    <tr
                      key={index}
                      className="text-center hover:text-red-500 pt-2"
                    >
                      <td className="border px-2 py-1">{pro.productId}</td>
                      <td className="border px-2 py-1">{pro.brand}</td>
                      <td className="border px-2 py-1">{pro.type}</td>
                      <td className="border px-2 py-1">{pro.quantity}</td>
                      <td className="border px-2 py-1">{pro.price}</td>
                      <td className="border px-2 py-1">{pro.amount}</td>
                      <td className="border px-2 py-1">
                        <button
                          onClick={() => proListDelete({ index })}
                          className=" bg-blue-400 p-1 pr-3 pl-3 rounded-full hover:text-red-700"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-red-700 font-bold text-center place-self-end pt-4 pr-[6%]">
            Total Amount = {totalBill}
          </p>
          <button
            className="bg-gradient-to-r from-pink-600 to-purple-600 w-[120px] place-self-end mr-[6%] mt-5 rounded-lg font-bold hover:text-white p-1 "
            onClick={submitFunction}
          >
            Print View
          </button>
        </div>
      )}
      <div className="hidden">
        <PdfPrint
          ref={componentRef}
          totalData={totalData}
          totalBill={totalBill}
          proList={productList}
        />
      </div>
    </div>
  );
}

export default InvoiceForm;
