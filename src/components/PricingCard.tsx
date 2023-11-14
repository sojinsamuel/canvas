"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface PriceObject {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount: null | any;
  livemode: boolean;
  lookup_key: null | any;
  metadata: Record<string, any>;
  nickname: string;
  product: string;
  recurring: null | any;
  tax_behavior: string;
  tiers_mode: null | any;
  transform_quantity: null | any;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}

function PricingCard({ price }: { price: PriceObject }) {
  function dynamicSubtitle(price: PriceObject) {
    if (price.nickname === "20 yard dumpster") {
      return <p className="text-[#f1592a] mt-1">3-day rental</p>;
    } else if (price.nickname === "15 yard dumpster") {
      return <p className="text-[#f1592a] mt-1">3-day rental</p>;
    } else if (price.nickname === "From Fir - Mon (includes holiday)") {
      return <p className="text-[#f1592a] mt-1">Weekend Special</p>;
    } else if (price.nickname === "Only available for first 25 hrs") {
      return <p className="text-[#f1592a] mt-1">3-day rental</p>;
    }
  }
  function dynamicDesc(price: PriceObject) {
    if (price.nickname === "20 yard dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">$25 per day after 3 days</h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Neighborhood & HOA Friendly
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">Driveway Protection</h2>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "15 yard dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">$25 per day after 3 days</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Driveway Protection</p>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "From Fir - Mon (includes holiday)") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">$25 per day after 3 days</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Driveway Protection</p>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "Only available for first 25 hrs") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">$25 per day after 3 days</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Driveway Protection</p>
          </div>
          <div className="border" />
        </div>
      );
    }
  }
  const [error, setError] = useState(false);

  const handleSubscription = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/payment",
        {
          priceId: price.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.location.assign(data.url);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      {error && (
        <p className="text-red-500">An error occurred, payment failed</p>
      )}
      <div className="border-gray-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
        <div>
          <div className="bg-gray-100 h-28 items-center font-bold">
            <h4 className="text-3xl">{price.nickname}</h4>
            <p className="">{dynamicSubtitle(price)}</p>
            <h3>First 2,000lbs Included</h3>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center pt-4">
              <h1 className="text-5xl font-bold">
                {(price.unit_amount / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </h1>
              <h3 className="">Additional weight just $.05 / lb</h3>
            </div>
            <ul className="flex justify-center">
              <li className="text-xl font-bold">{dynamicDesc(price)}</li>
            </ul>
            <button
              className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#f1592a] py-2 px-4 text-sm font-medium text-white hover:bg-[#f1592a] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f1592a]"
              onClick={handleSubscription}
            >
              Rent This Dumpster
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingCard;
