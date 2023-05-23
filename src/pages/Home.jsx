import React from "react";

export default function Home() {
  return (
    <div className="flex justify-around gap-2">
      <div className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <div className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
          <div className="mt-16">
            <h3 className="text-lg font-bold text-gray-900 sm:text-3xl">
              All Jobs
            </h3>

            <p className="mt-2 text-2xl text-gray-500">20</p>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <div className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
          <div className="mt-16">
            <h3 className="text-lg font-bold text-gray-900 sm:text-3xl">
              On-Going Jobs
            </h3>

            <p className="mt-2 text-2xl text-gray-500">12</p>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <div className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
          <div className="mt-16">
            <h3 className="text-lg font-bold text-gray-900 sm:text-3xl">
              job done
            </h3>

            <p className="mt-2 text-2xl text-gray-500">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
