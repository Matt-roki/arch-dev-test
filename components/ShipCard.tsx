import React from "react";
import { Meteors } from "./meteors";
import Link from "next/link";
import { ShipData } from "@/utils/types";

export function ShipCard({
  shipData,
  allDetails,
}: {
  shipData: ShipData;
  allDetails?: boolean;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-300"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.75 5.99996V10.5817L20.25 15.4567V19.5L14.85 17.25H14.164C14.2486 17.7211 14.3143 18.3821 14.142 18.9632C13.9659 19.5569 13.4881 20.2215 13.1356 20.6687C12.9464 20.9088 12.7667 21.1187 12.6346 21.2684C12.5683 21.3434 12.5134 21.404 12.4746 21.4463C12.4552 21.4674 12.4398 21.484 12.429 21.4957L12.4162 21.5094L12.4125 21.5133L12.4113 21.5145L12.4108 21.5151L11.8348 22.1242L11.2932 21.4844L11.2915 21.4825L11.2881 21.4784L11.2764 21.4644C11.2665 21.4525 11.2525 21.4357 11.235 21.4143C11.2 21.3715 11.1507 21.3104 11.0913 21.2347C10.9731 21.0839 10.8128 20.8723 10.6459 20.6301C10.3367 20.1815 9.91547 19.504 9.79514 18.8955C9.68449 18.3359 9.79889 17.7103 9.92202 17.25H9.15L3.75 19.5V15.4567L8.25 10.5817V5.99996C8.25 5.35551 8.54034 4.80104 8.87841 4.36963C9.21911 3.93484 9.65484 3.56455 10.0602 3.2711C10.4698 2.97466 10.8748 2.73774 11.175 2.57572C11.326 2.49424 11.4525 2.43056 11.5426 2.38666C11.5877 2.36469 11.6238 2.34761 11.6494 2.33567L11.6799 2.32162L11.6889 2.31754L11.6917 2.31624L11.6935 2.31543L12 2.17822L12.3072 2.31577L12.3083 2.31624L12.3111 2.31754L12.3201 2.32162L12.3506 2.33567C12.3762 2.34761 12.4123 2.36469 12.4574 2.38666C12.5475 2.43056 12.674 2.49424 12.825 2.57572C13.1252 2.73774 13.5302 2.97466 13.9398 3.2711C14.3452 3.56455 14.7809 3.93484 15.1216 4.36963C15.4597 4.80104 15.75 5.35551 15.75 5.99996ZM11.4896 17.25C11.4625 17.3292 11.4346 17.4157 11.4078 17.5068C11.2792 17.9448 11.2175 18.3559 11.2666 18.6045C11.3201 18.8746 11.5662 19.3221 11.881 19.7789L11.9023 19.8097C11.9206 19.7869 11.939 19.7637 11.9575 19.7402C12.3185 19.2821 12.6193 18.8218 12.7039 18.5367C12.7799 18.2806 12.7573 17.8699 12.6733 17.4389C12.6605 17.3731 12.6468 17.3098 12.633 17.25H11.4896ZM15.75 16V12.7932L18.75 16.0432V17.25L15.75 16ZM14.25 5.99996V15.75H9.75V5.99996C9.75 5.81598 9.83466 5.58123 10.0591 5.29482C10.2809 5.01178 10.5952 4.73562 10.9398 4.48618C11.2802 4.23973 11.6252 4.0373 11.8875 3.89571C11.9272 3.87428 11.9648 3.85435 12 3.83598C12.0352 3.85435 12.0728 3.87428 12.1125 3.89571C12.3748 4.0373 12.7198 4.23973 13.0602 4.48618C13.4048 4.73562 13.7191 5.01178 13.9409 5.29482C14.1653 5.58123 14.25 5.81598 14.25 5.99996ZM8.25 12.7932V16L5.25 17.25V16.0432L8.25 12.7932Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h2 className="font-bold text-xl text-white mb-4 relative z-50">
            {shipData.name}
          </h2>

          <ul className="font-normal text-base text-slate-500 mb-4 relative z-50">
            <li>
              <span className="font-bold">Type: </span>
              {shipData.type}
            </li>
            <li>
              <span className="font-bold">Home Port: </span>
              {shipData.home_port}
            </li>
            <li>
              <span className="font-bold">Active: </span>
              <span
                className={`font-bold ${
                  shipData.active ? "text-green-600" : "text-red-600"
                }`}
              >
                {shipData.active ? "Yes" : "No"}
              </span>
            </li>
          </ul>
          {allDetails && (
            <div>
              <p className="font-bold">Launches:</p>
              <ul className="list-disc pl-5 font-normal text-base text-slate-500 mb-4 relative z-50">
                {shipData.launches.map((launch: string, index: number) => (
                  <li key={index}>{launch}</li>
                ))}
              </ul>
            </div>
          )}
          {!allDetails && (
            <Link
              href={`/ships/${shipData.id}`}
              className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300"
            >
              View details
            </Link>
          )}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
