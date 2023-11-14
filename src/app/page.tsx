"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/cards/card";

const pricing = [
  {
    plan: "silver",
    price: 49,
  },
  {
    plan: "gold",
    price: 99,
  },
  {
    plan: "platinum",
    price: 199,
  },
];

export default function Home() {
  const [prices, setPrices] = useState([]);
  const fetchPrices = async () => {
    const { data } = await axios.get("/api/getproducts");
    console.log("====================================");
    console.log(data.slice(4));
    setPrices(data.slice(4));
    console.log("====================================");
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Get Started
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-[#636262] md:mb-12 lg:mb-16">
          We are unable to offer refunds at this time due to the high costs to
          generate images. Thank you for understanding.{" "}
        </p>
        {/* Card */}
        <ul className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          {prices
            ? prices.map((item: any) => (
                <Card
                  key={item.id}
                  price={item.unit_amount}
                  plan={item.nickname}
                  priceId={item.id}
                />
              ))
            : "Fetching prices..."}
        </ul>
      </div>
    </section>
  );
}
