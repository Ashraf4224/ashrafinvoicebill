import { forwardRef } from "react";
import Invoice from "../components/Invoice";
import Customer from "../components/Customer";
import ProductList from "../components/ProductList";
import Header1 from "../components/Header1";

export const PdfPrint = forwardRef((props, ref) => {
  const data = props.totalData;

  return (
    <div ref={ref} className="mt-5 w-full h-full">
      <Header1 />
      <Invoice id={data.invoiceId} date={data.date} />
      <Customer name={data.cName} mobile={data.mobile} />
      <ProductList proList={props.proList} />
      <p className="text-red-700 font-bold text-center place-self-end pt-4 pr-[6%]">
        Total Amount = {props.totalBill}
      </p>
      {/**** i want this at bottom section*/}
      <p className=" absolute mb-5 pl-[6%] text-red-700 font-semibold">
        No return and No exchange
      </p>
    </div>
  );
});
