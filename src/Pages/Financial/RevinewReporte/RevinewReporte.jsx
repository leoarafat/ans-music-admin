import React from "react";

const RevinewReporte = () => {
  return (
    <div className="">
      <div className="top_item flex items-center justify-end gap-5">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select className="select select-primary w-full max-w-xs">
          <option selected>
          Report Month (Dec 23 - Jul 24)
          </option>
          <option>Game of Thrones</option>
        </select>
      </div>
     <div className="bg-white p-5 rounded-md shadow-md mt-20">
     <div className=" grid grid-cols-2 gap-6 mt-10">
        <div className="shadow flex-col flex justify-center gap-3 py-7 rounded p-5">
          <p className="text-sm">Total Approved</p>
          <h4 className="text-3xl font-bold text-[#3D6745]">$150.00</h4>
        </div>
        <div className="shadow flex-col flex justify-center gap-3 py-7 rounded p-5">
          <p className="text-sm">Total Not Approved</p>
          <h4 className="text-3xl font-bold text-[#3D6745]">$0.00</h4>
        </div>
      </div>
     </div>
    </div>
  );
};

export default RevinewReporte;
