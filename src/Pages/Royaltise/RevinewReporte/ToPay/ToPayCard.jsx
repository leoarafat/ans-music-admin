import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import PaymentModal from "./PaymentModal/PaymentModal";

const ToPayCard = ({ paymentData }) => {
  console.log(paymentData);
  const [toPayOpen, setToPayOpen] = useState(null);

  const cencelModal = () => {
    setToPayOpen(null);
  };
  const handlePaySuccess = () => {
    setToPayOpen(null);
  };
  return (
    <div className="top_title bg-white p-2 items-center grid grid-cols-8  rounded-sm text-sm shadow">
      <div className="col-span-2 flex items-center gap-2">
        <img
          className="w-10"
          src="https://static6.depositphotos.com/1001599/569/i/450/depositphotos_5691496-stock-photo-treble-clef.jpg"
          alt="img"
        />
        <span>Ans Music Original</span>
      </div>
      <div className="col-span-6 grid grid-cols-5 gap-3">
        <span className="">479826</span>
        <span className="">{paymentData?.email}</span>
        <span className="">$150.00</span>
        <span className="">$150.00</span>
        <div className="flex items-center justify-between gap-1">
          <span className="">May 14, 2024</span>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1 font-bold text-xl">
              <HiDotsVertical />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] flex flex-col p-2 shadow bg-white rounded w-52 font-semibold"
            >
              <label
                onClick={() => setToPayOpen(paymentData)}
                htmlFor="confirmation-modal"
                className="flex hover:bg-green-100 text-[#31953b] items-center gap-2 cursor-pointer p-2 "
              >
                <span className="text-xl">
                  <AiOutlineDollar />
                </span>
                <a>Review & Pay</a>
              </label>
              <Link to={"/client/423232"}>
                <li className="flex hover:bg-green-100 text-[#F38B2A] items-center gap-2 cursor-pointer p-2 ">
                  <span>
                    <FaUserCheck />
                  </span>
                  <a>Go To Client Page</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {toPayOpen && (
        <PaymentModal
          closeModal={cencelModal}
          successAction={handlePaySuccess}
          paymentData={paymentData}
        ></PaymentModal>
      )}
    </div>
  );
};

export default ToPayCard;
