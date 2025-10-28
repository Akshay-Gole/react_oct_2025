import { ArrowUpRight } from "lucide-react";

const LeftText = () => {
  return (
    <div className="flex flex-col justify-between py-6 bg-amber-200 h-full box-border">
      <div>
        <h1 className="text-4xl font-bold">
          Prospective customer segmentation
        </h1>
        <h5 className="text-gray-600">
          Depending on customer satisfcation and access to banking products,
          potential target audience cab be divided into three groups
        </h5>
      </div>

      <ArrowUpRight size={60} />
    </div>
  );
};

export default LeftText;
