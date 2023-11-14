"use client";

import axios from "axios";
function card({ price, plan, priceId }: any) {
  console.log("====================================");
  console.log(price, plan, priceId);
  console.log("====================================");
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/payment",
        {
          priceId,
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
    }
  };

  return (
    <li className="flex max-w-md flex-col items-start justify-self-center border border-solid border-[#dfdfdf] p-8">
      <div className="mb-4 rounded-md bg-[#f2f2f7] px-4 py-1.5">
        <h2 className="text-sm font-bold">{plan || "Example Plan"}</h2>
      </div>
      <p className="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">
        Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus
        sit
      </p>
      <p className="mb-5 text-left text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
        ${price / 100}
      </p>
      <button
        onClick={handleSubscription}
        className="mb-5 flex w-full grid-cols-2 flex-row items-center justify-center border-2 border-solid border-black px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px] md:mb-6 lg:mb-8"
      >
        <div className="mr-6 font-bold">Get Started</div>
        <div className="h-4 w-4">
          <svg
            fill="currentColor"
            viewBox="0 0 20 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Arrow Right</title>
            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
          </svg>
        </div>
      </button>
      <div className="mt-2 flex flex-row items-center text-left">
        <svg
          className="mr-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_911_1122)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_911_1122">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="">Premium Designs</p>
      </div>
      <div className="mt-2 flex flex-row items-center text-left">
        <svg
          className="mr-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_911_1122)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_911_1122">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="">Exclusive Freebies</p>
      </div>
      <div className="mt-2 flex flex-row items-center text-left">
        <svg
          className="mr-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_911_1122)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_911_1122">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="">Monthly Free Exclusive</p>
      </div>
      <div className="mt-2 flex flex-row items-center text-left">
        <svg
          className="mr-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_911_1122)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_911_1122">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="">Customer Support</p>
      </div>
    </li>
  );
}

export default card;
