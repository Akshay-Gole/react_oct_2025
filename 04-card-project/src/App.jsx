import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      nameOfCompany: "Meta",
      datePosted: "5 days ago",
      post: "Software Engineer (Frontend)",
      tag1: "Full-time",
      tag2: "Junior level",
      pay: 68,
      location: "Menlo Park, CA, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      nameOfCompany: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: 90,
      location: "Cupertino, CA, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      nameOfCompany: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Engineer (Java)",
      tag1: "Full-time",
      tag2: "Mid level",
      pay: 72,
      location: "Seattle, WA, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      nameOfCompany: "Netflix",
      datePosted: "10 weeks ago",
      post: "Data Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: 105,
      location: "Los Gatos, CA, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      nameOfCompany: "Google",
      datePosted: "1 week ago",
      post: "Site Reliability Engineer",
      tag1: "Full-time",
      tag2: "Mid level",
      pay: 85,
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      nameOfCompany: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Solutions Architect",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: 95,
      location: "Redmond, WA, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      nameOfCompany: "NVIDIA",
      datePosted: "6 days ago",
      post: "ML Engineer (Computer Vision)",
      tag1: "Full-time",
      tag2: "Mid level",
      pay: 98,
      location: "Santa Clara, CA, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      nameOfCompany: "Tesla",
      datePosted: "3 weeks ago",
      post: "Firmware Engineer",
      tag1: "Full-time",
      tag2: "Junior level",
      pay: 60,
      location: "Fremont, CA, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      nameOfCompany: "Adobe",
      datePosted: "8 days ago",
      post: "Product Designer",
      tag1: "Full-time",
      tag2: "Mid level",
      pay: 70,
      location: "San Jose, CA, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      nameOfCompany: "Salesforce",
      datePosted: "5 weeks ago",
      post: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: 88,
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((elem, idx) => (
        <Card
          key={idx}
          brandLogo={elem.brandLogo}
          nameOfCompany={elem.nameOfCompany}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
      ))}
    </div>
  );
};

export default App;
