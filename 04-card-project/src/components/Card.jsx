import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  const {
    brandLogo,
    nameOfCompany,
    datePosted,
    post,
    tag1,
    tag2,
    pay,
    location,
  } = props;

  return (
    <div className="card">
      <div className="top">
        <img src={brandLogo} alt={nameOfCompany} />
        <button>
          Save <Bookmark size={10} />
        </button>
      </div>

      <div className="center">
        <h3>
          {nameOfCompany} <span>{datePosted}</span>
        </h3>
        <h2>{post}</h2>
        <div className="tag">
          <h4>{tag1}</h4>
          <h4>{tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{pay}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
