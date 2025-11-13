import React from "react";
import ImageCard from "./ImageCard";

const ImageContainer = () => {
  const cardsInfo = [
    {
      num: 1,
      des: "Prime Customers, that have access to bank credit and are stisfied with the current product",
      btnText: "Satisfied",
      url: "/first.jpg",
    },
    {
      num: 2,
      des: "Prime customers, that have access to bank credit and are not satisfied with the current service",
      btnText: "Underserved",
      url: "/second.jpg",
    },
    {
      num: 3,
      des: "Customers from near-prime and sub-prime segments with no access to bank credit",
      btnText: "Underbanked",
      url: "/three.jpg",
    },
  ];
  return (
    <div className="p-6 flex-6 flex gap-8">
      {cardsInfo.map((ele, index) => (
        <ImageCard
          key={index}
          num={ele.num}
          description={ele.des}
          btnText={ele.btnText}
          imageURL={ele.url}
        />
      ))}
    </div>
  );
};

export default ImageContainer;
