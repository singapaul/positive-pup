import Button from "../Button/Button";
import "./Hero.scss";

const Hero = ({ header, subheaderText, buttonText, isSecondary, link }) => {
  return (
    <div className="hero">
      {header}
      <p className="hero__subheader">{subheaderText}</p>
      <Button buttonText={buttonText} isSecondary={isSecondary} link={link} />
    </div>
  );
};

export default Hero;