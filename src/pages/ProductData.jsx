import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
function ProductData({ closeCall, addproducts, toalAmount }) {
  const panelRef = useRef();
  const Closepanel = (e) => {
    if (panelRef.current === e.target) {
      closeCall();
    }
  };
  const [data, setData] = useState({});
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...data,
      [name]: value,
      amount:
        name === "quantity"
          ? (value * prevData.price).toString()
          : (prevData.quantity * value).toString(),
    }));
  };
  const addClicked = () => {
    addproducts(data);
    closeCall();
  };
  return (
    <div
      ref={panelRef}
      onClick={Closepanel}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm w-full h-auto md:h-screen flex md:items-center justify-center"
    >
      <div className="w-[88%] h-[60%]  px-2  mt-16 md:w-1/2 md:mt-0 flex flex-col gap-4 text-center ">
        <button
          className="place-self-end py-2 z-10 text-white"
          onClick={() => closeCall()}
        >
          <AiOutlineClose size={20} />
        </button>
        <div className="bg-indigo-500 w-full  text-white flex flex-col gap-5 px-3 py-2 mx-auto rounded-lg">
          <form className="grid grid-cols-2 gap-4 justify-between ">
            <label>Product Id</label>
            <input
              type="text"
              name="productId"
              required
              onChange={changeHandler}
              className="rounded-md outline-none py-0.5 p-1 text-black"
            />
            <label>Brand</label>
            <input
              onChange={changeHandler}
              type="text"
              name="brand"
              required
              className="rounded-md outline-none py-0.5 p-1 text-black"
            />
            <label>Type</label>
            <input
              onChange={changeHandler}
              type="text"
              name="type"
              required
              className="rounded-md outline-none py-0.5 p-1 text-black"
            />
            <label>Quantity</label>
            <input
              onChange={changeHandler}
              type="text"
              name="quantity"
              required
              className="rounded-md outline-none py-0.5 p-1 text-black"
            />
            <label>Price</label>
            <input
              onChange={changeHandler}
              type="text"
              name="price"
              required
              className="rounded-md outline-none py-0.5 p-1 text-black"
            />
            <label>Amount</label>
            <input
              value={data.amount || 0}
              type="text"
              name="amount"
              readOnly
              required
              className="rounded-md outline-none py-0.5 p-1 text-black"
            />
            <label></label>
            <button
              type="button"
              onClick={addClicked}
              className="mt-2 py-2 bg-gradient-to-r from-pink-500 to-purple-700 items-center rounded-lg font-semibold hover:text-white"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductData;
