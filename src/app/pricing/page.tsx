"use client";

import PricingCard from "@/components/PricingCard";
import { UserButton } from "@clerk/nextjs";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

function Pricing() {
  const [prices, setPrices] = useState([]);
  const { isLoaded, user } = useUser();

  const fetchPrices = async () => {
    const { data } = await axios.get("/api/getproducts");
    setPrices(data);
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  if (isLoaded)
    console.log(user?.fullName, user?.emailAddresses[0].emailAddress, user?.id);

  return (
    <section className="w-full">
      <UserButton afterSignOutUrl="/" />
      <div className="mx-auto max-w-4xl text-center mt-10 items-center">
        <h2 className="text-3xl font-semibold leading-7 text-[#f1592a]">
          Pricing
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Choose the right dumpster for you
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          Check out all the info below
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1040px] items-center mx-auto">
        {prices &&
          prices.map((price: any) => (
            <PricingCard key={price.id} price={price} />
          ))}
      </div>
    </section>
  );
}

export default Pricing;
