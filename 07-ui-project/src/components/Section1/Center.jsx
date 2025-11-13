import ImageContainer from "./ImageContainer";
import LeftText from "./LeftText";

const Center = () => {
  return (
    <div className="py-8 px-18 flex-1 flex gap-8">
      <LeftText />
      <ImageContainer />
    </div>
  );
};

export default Center;
