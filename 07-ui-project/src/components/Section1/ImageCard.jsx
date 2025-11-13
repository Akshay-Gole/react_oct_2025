import { ArrowRight } from "lucide-react";

const ImageCard = (props) => {
  const { num, description, btnText, imageURL } = props;
  return (
    <div
      className=" text-white p-8 rounded-4xl bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <div className="bg-white text-black w-12 h-12 rounded-full flex justify-center items-center">
        <h2 className="text-4xl">{num}</h2>
      </div>
      <div>
        <p className="text-lg leading-normal">{description}</p>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 rounded-full bg-blue-600">
            {btnText}
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-600">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
