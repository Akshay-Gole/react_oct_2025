import HeroText from "./HeroText";
import Arrow from "./Arrow";

const LeftText = () => {
  return (
    <div className="flex flex-col justify-between h-full box-border flex-3">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftText;
