import React from "react";

export default function SummaryCard(props) {
  const { title, amount } = props;
  return (
    <div className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
      <div className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
        <div className="mt-16">
          <h3 className="text-lg font-bold text-gray-900 sm:text-3xl">
            {title}
          </h3>

          <p className="mt-2 text-2xl text-gray-500">{amount}</p>
        </div>
      </div>
    </div>
  );
}
